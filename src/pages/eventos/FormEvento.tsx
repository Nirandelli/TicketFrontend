/* eslint-disable no-bitwise */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import {Button, Form} from 'react-bootstrap';
import intance from '@app/utils/axios';
import {AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const FormEvento = () => {
  const [tipoEventos, setTipoEventos] = useState([]);
  const [lugarEventos, setLugarEventos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [extInt, setExtInt] = useState('');
  const [lugar, setLugar] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [horaFin, setHoraFin] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    intance
      .post('/eventos/guardar', {
        nombre,
        descripcion,
        tipo_evento_id: tipo,
        int_ext: extInt,
        lugar_evento_id: lugar,
        fecha_inicio: `${fechaInicio} ${horaInicio}`,
        fecha_fin: `${fechaFin} ${horaFin}`
      })
      .then((response: AxiosResponse) => {
        const res = response.data.data;
        toast.success(res.message);
        navigate('/eventos');
      })
      .catch((error: any) => {
        const fileds = [
          'nombre',
          'descripcion',
          'tipo_evento_id',
          'int_ext',
          'lugar_evento_id',
          'fecha_inicio',
          'fecha_fin'
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

  const getTipoEventos = () => {
    intance.get('tipo-eventos').then((response: any) => {
      setTipoEventos(response.data);
    });
  };

  const getLugarEventos = () => {
    intance.get('lugar-eventos').then((response: any) => {
      setLugarEventos(response.data);
    });
  };

  useEffect(() => {
    getTipoEventos();
    getLugarEventos();
  }, []);

  return (
    <div>
      <ContentHeader title="Eventos" />
      <section className="content">
        <div className="container-fluid">
          <div className="card card card-dark card-outline">
            <div className="card-header">
              <h3 className="card-title">Crear evento</h3>
              <div className="card-tools" />
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="card-body">
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Nombre del evento <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre del evento"
                    onChange={(evt) => setNombre(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Tipo de evento <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <select
                    className="form-control"
                    onChange={(evt) => setTipo(evt.target.value)}
                  >
                    <option value="">Selecciona una opción</option>
                    {tipoEventos.map((element) => (
                      <option key={element.id} value={element.id}>
                        {element.nombre}
                      </option>
                    ))}
                  </select>
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Evento Int/Ext <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <select
                    className="form-control"
                    onChange={(evt) => setExtInt(evt.target.value)}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Interno">Interno</option>
                    <option value="Externo">Externo</option>
                  </select>
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Lugar del evento <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <select
                    className="form-control"
                    onChange={(evt) => setLugar(evt.target.value)}
                  >
                    <option value="">Selecciona una opción</option>
                    {lugarEventos.map((element) => (
                      <option key={element.id} value={element.id}>
                        {element.nombre}
                      </option>
                    ))}
                  </select>
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0 row">
                  <Form.Label className="mr-sm-2 col-sm-12">
                    Fecha y hora de inicio <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <Form.Control
                    className="col-sm-6"
                    type="date"
                    name="fecha_inicio"
                    onChange={(evt) => setFechaInicio(evt.target.value)}
                  />
                  <Form.Control
                    className="col-sm-6"
                    type="time"
                    name="fecha_fin"
                    onChange={(evt) => setHoraInicio(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0 row">
                  <Form.Label className="mr-sm-2 col-sm-12">
                    Fecha y hora final <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <Form.Control
                    className="col-sm-6"
                    type="date"
                    name="fecha_fin"
                    onChange={(evt) => setFechaFin(evt.target.value)}
                  />
                  <Form.Control
                    className="col-sm-6"
                    type="time"
                    name="horafin_inicio"
                    onChange={(evt) => setHoraFin(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">
                    Descripción <span style={{color: 'red'}}>*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Descripción del evento"
                    onChange={(evt) => setDescripcion(evt.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="card-footer">
                <Button href="/eventos" variant="outline-warning">
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

export default FormEvento;
