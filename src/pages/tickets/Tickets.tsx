/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';
import {Table, Button, Badge} from 'react-bootstrap';

const Tickets = () => {
  return (
    <div>
      <ContentHeader title="Tickets" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Listado de tickets</h3>
              <div className="card-tools">
                <Button href="/crear-ticket" variant="secondary">
                  Nuevo Ticket
                </Button>{' '}
              </div>
            </div>
            <div className="card-body">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Folio</th>
                    <th>Fecha</th>
                    <th>Asignado</th>
                    <th>Asunto</th>
                    <th>Status</th>
                    <th>Prioridad</th>
                    <th>Tipo de servicio</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0000006</td>
                    <td>28-03-2023 10:19:02</td>
                    <td>-</td>
                    <td>No tengo internet</td>
                    <td>
                      <Badge bg="primary">nuevo</Badge>{' '}
                    </td>
                    <td>
                      <Badge bg="warning" text="dark">
                        media
                      </Badge>{' '}
                    </td>
                    <td>Mantenimiento de impresoras</td>
                    <td>mdo</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
