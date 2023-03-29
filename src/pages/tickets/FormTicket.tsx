/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';
import {Button, Form} from 'react-bootstrap';

const FormTicket = () => {
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
            <div className="card-body">
              <Form>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">Asunto</Form.Label>
                  <Form.Control
                    type="text"
                    name="Asunto"
                    id="Asunto"
                    placeholder="Asunto"
                  />
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">Tipo de servicio</Form.Label>
                  <select className="form-control">
                    <option>Selecciona una opción</option>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">Prioridad</Form.Label>
                  <select className="form-control">
                    <option>Selecciona una opción</option>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </Form.Group>
                <Form.Group className="pb-2 mr-sm-2 mb-sm-0">
                  <Form.Label className="mr-sm-2">Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Descripción del ticket"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Evidencia</Form.Label>
                  <Form.Control id="exampleFile" name="file" type="file" />
                </Form.Group>
              </Form>
            </div>
            <div className="card-footer">
              <Button href="/tickets" variant="outline-warning">
                Cancelar
              </Button>{' '}
              <Button variant="success">Guardar</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormTicket;
