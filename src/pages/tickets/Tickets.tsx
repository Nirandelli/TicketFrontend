/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import {Table, Button, Badge} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import intance from '@app/utils/axios';
import {DateTime} from 'luxon';
import ExpandedComponent from '@app/components/tickets/ExpandedComponent';

const columns = [
  {
    name: 'Folio',
    selector: (row) => row.folio,
    sortable: true
  },
  {
    name: 'Fecha',
    selector: (row) => {
      return DateTime.fromISO(row.created_at).toFormat('dd LLL yyyy');
    },
    sortable: true
  },
  {
    name: 'Asignado',
    selector: (row) => (row.asignado ? row.asignado.name : '-'),
    sortable: true
  },
  {
    name: 'Asunto',
    selector: (row) => row.asunto,
    sortable: true
  },
  {
    name: 'Status',
    selector: (row) => row.status.nombre,
    sortable: true
  },
  {
    name: 'Prioridad',
    selector: (row) => row.prioridad,
    sortable: true
  },
  {
    name: 'Tipo de servicio',
    selector: (row) => row.servicio.nombre,
    sortable: true
  },
];

const paginationComponentOptions = {
  rowsPerPageText: 'Filas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
};

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const getTickets = async (page: number) => {
    setLoading(true);

    const response = await intance.get(
      `/tickets?page=${page}&per_page=${perPage}`
    );

    setTickets(response.data.data.data);
    setTotalRows(response.data.data.total);
    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    getTickets(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);

    const response = await intance.get(
      `/tickets?page=${page}&per_page=${newPerPage}`
    );

    setTickets(response.data.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    getTickets(1);
  }, []);

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
              <DataTable
                title="Tickets"
                columns={columns}
                data={tickets}
                progressPending={loading}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handlePerRowsChange}
                paginationComponentOptions={paginationComponentOptions}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
              />
              {/* <Table striped bordered hover>
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
              </Table> */}
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
