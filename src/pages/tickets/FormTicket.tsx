/* eslint-disable no-bitwise */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import {Button, Form} from 'react-bootstrap';
import intance from '@app/utils/axios';
import {AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const FormTicket = () => {
  const [servicios, setServicios] = useState([]);
  const [asunto, setAsunto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [servicio, setServicio] = useState('');
  const [archivo, setArchivo] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    intance
      .post('/tickets/guardar', {
        asunto,
        descripcion,
        prioridad,
        tipo_servicio_id: servicio,
        archivo
      })
      .then((response: AxiosResponse) => {
        const res = response.data.data;
        toast.success(res.message);
        navigate('/tickets');
      })
      .catch((error: any) => {
        const fileds = [
          'asunto',
          'descripcion',
          'prioridad',
          'tipo_servicio_id'
        ];

        if (error.response.data.errors) {
          fileds.forEach((element) => {
            if (error.response.data.errors[element]) {
              toast.error(error.response.data.errors[element][0]);
            }
          });
        }
      });
  };

  const onChangeFiles = (evt: any) => {
    fileToBase64(evt.target.files[0], (response: string) => {
      setArchivo(response);
    });
  };

  const fileToBase64 = (file: Blob, callback: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      callback(
        typeof reader.result === 'string'
          ? reader.result.split('base64,')[1]
          : ''
      );
  };

  const getServicios = () => {
    intance.get('tipo-servicios').then((response: any) => {
      setServicios(response.data);
    });
  };

  useEffect(() => {
    getServicios();
  }, []);

  return (
    <div>
      <ContentHeader title="Tickets" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Crear ticket</h3>
              <div className="card-tools" />
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="card-body">
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Asunto <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Asunto"
                    id="Asunto"
                    placeholder="Asunto"
                    onChange={(evt) => setAsunto(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Tipo de servicio <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <select
                    className="form-control"
                    onChange={(evt) => setServicio(evt.target.value)}
                  >
                    <option value="">Selecciona una opción</option>
                    {servicios.map((element) => (
                      <option key={element.id} value={element.id}>
                        {element.nombre}
                      </option>
                    ))}
                  </select>
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Prioridad <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <select
                    className="form-control"
                    onChange={(evt) => setPrioridad(evt.target.value)}
                  >
                    <option>Selecciona una opción</option>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Descripción <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Descripción del ticket"
                    onChange={(evt) => setDescripcion(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Evidencia</Form.Label>
                  <br />
                  <input
                    id="files"
                    name="file"
                    type="file"
                    onChange={onChangeFiles}
                  />
                </Form.Group>
              </div>
              <div className="card-footer">
                <Button href="/tickets" variant="outline-warning">
                  Cancelar
                </Button>{' '}
                <Button type="submit" variant="success">
                  Guardar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormTicket;
