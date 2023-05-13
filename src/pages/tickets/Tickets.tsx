/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import {Table, Button, Badge} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import intance from '@app/utils/axios';
import {DateTime} from 'luxon';
import ExpandedComponent from '@app/components/tickets/ExpandedComponent';
import {logoutUser} from '@app/store/reducers/auth';
import {useNavigate} from 'react-router-dom';
import store from '@app/store/store';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const navigate = useNavigate();

  const columns = [
    {
      name: 'Folio',
      selector: (row) => `#${row.folio}`,
      sortable: true
    },
    {
      name: 'Asunto',
      selector: (row) => row.asunto,
      sortable: true
    },
    {
      name: 'Solicitante',
      selector: (row) => row.solicitante,
      sortable: true
    },
    {
      name: 'Tipo de servicio',
      selector: (row) => row.servicio.nombre,
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
      name: 'Status',
      selector: (row) => getBadge(row.status),
      sortable: false
    },
    {
      name: 'Prioridad',
      selector: (row) => getBadgePrioridad(row.prioridad),
      sortable: false
    },
    {
      name: 'Acción',
      selector: (row) => getButtons(row.id),
      sortable: false
    }
  ];

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  };

  // eslint-disable-next-line consistent-return
  const getBadge = (status: any) => {
    if (status.id === 1) {
      return <span className="badge badge-primary">{status.nombre}</span>;
    }

    if (status.id === 2) {
      return <span className="badge badge-info">{status.nombre}</span>;
    }

    if (status.id === 3) {
      return <span className="badge badge-success">{status.nombre}</span>;
    }

    if (status.id === 4) {
      return <span className="badge badge-danger">{status.nombre}</span>;
    }

    if (status.id === 5) {
      return <span className="badge badge-warning">{status.nombre}</span>;
    }
  };

  // eslint-disable-next-line consistent-return
  const getBadgePrioridad = (prioridad: string) => {
    if (prioridad === 'alta') {
      return <span className="badge badge-danger">{prioridad}</span>;
    }

    if (prioridad === 'media') {
      return <span className="badge badge-warning">{prioridad}</span>;
    }

    if (prioridad === 'baja') {
      return <span className="badge badge-success">{prioridad}</span>;
    }
  };

  const getButtons = (id: number) => {
    return (
      <button
        type="button"
        onClick={() => navigate(`/comentarios-ticket/${id}`)}
        className="btn btn-info"
      >
        <i className="fas fa-comments" />
      </button>
    );
  };

  const getTickets = async (page: number) => {
    setLoading(true);

    const response = await intance
      .get(`/tickets?page=${page}&per_page=${perPage}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        store.dispatch(logoutUser());
        navigate('/login');
      });

    if (response) {
      setTickets(response.data.data.data);
      setTotalRows(response.data.data.total);
    }

    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    getTickets(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);

    const response = await intance
      .get(`/tickets?page=${page}&per_page=${newPerPage}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        store.dispatch(logoutUser());
        navigate('/login');
      });

    if (response) {
      setTickets(response.data.data.data);
    }

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
          <div className="card card-dark card-outline">
            <div className="card-header">
              <h3 className="card-title">Listado de tickets</h3>
              <div className="card-tools">
                <Button href="/crear-ticket" variant="secondary">
                  Nuevo Ticket
                </Button>
              </div>
            </div>
            <div className="card-body">
              <DataTable
                title=""
                className="datatables-basic table table-bordered table-hover"
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
                highlightOnHover
              />
            </div>
            <div className="card-footer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
