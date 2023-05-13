/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import {Table, Button, Badge} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import intance from '@app/utils/axios';
import {DateTime} from 'luxon';
import ExpandedComponent from '@app/components/eventos/ExpandedComponent';
import {logoutUser} from '@app/store/reducers/auth';
import {useNavigate} from 'react-router-dom';
import store from '@app/store/store';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const navigate = useNavigate();

  const columns = [
    {
      name: 'Nombre',
      selector: (row) => row.nombre,
      sortable: true
    },
    {
      name: 'Evento Int/Ext',
      selector: (row) => row.int_ext,
      sortable: true
    },
    {
      name: 'Fecha',
      selector: (row) => `${row.fecha_inicio} a ${row.fecha_fin}`,
      sortable: true
    },
    {
      name: 'Coordinador',
      selector: (row) => {
        return row.coordinador;
      },
      sortable: true
    },
    {
      name: 'Tipo de evento',
      selector: (row) => row.tipo.nombre,
      sortable: true
    },
    {
      name: 'Lugar del evento',
      selector: (row) => row.lugar.nombre,
      sortable: false
    },
    {
      name: 'Autorizado',
      selector: (row) => getBadge(row.autorizado),
      sortable: false
    },
    {
      name: 'Revisado',
      selector: (row) => getBadge(row.revisado),
      sortable: false
    }
    // {
    //   name: 'Acción',
    //   selector: (row) => getButtons(row.id),
    //   sortable: false
    // }
  ];

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  };

  // eslint-disable-next-line consistent-return
  const getBadge = (status: any) => {
    if (status === 'Si') {
      return <span className="badge badge-primary">{status}</span>;
    }

    if (status === 'No') {
      return <span className="badge badge-warning">{status}</span>;
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

  const getEventos = async (page: number) => {
    setLoading(true);

    const response = await intance
      .get(`/eventos?page=${page}&per_page=${perPage}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        store.dispatch(logoutUser());
        navigate('/login');
      });

    if (response) {
      setEventos(response.data.data.data);
      setTotalRows(response.data.data.total);
    }

    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    getEventos(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);

    const response = await intance
      .get(`/eventos?page=${page}&per_page=${newPerPage}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        store.dispatch(logoutUser());
        navigate('/login');
      });

    if (response) {
      setEventos(response.data.data.data);
    }

    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    getEventos(1);
  }, []);

  return (
    <div>
      <ContentHeader title="Eventos" />
      <section className="content">
        <div className="container-fluid">
          <div className="card card-dark card-outline">
            <div className="card-header">
              <h3 className="card-title">Listado de eventos</h3>
              <div className="card-tools">
                <Button href="/crear-evento" variant="secondary">
                  Nuevo Evento
                </Button>
              </div>
            </div>
            <div className="card-body">
              <DataTable
                title=""
                className="datatables-basic table table-bordered table-hover"
                columns={columns}
                data={eventos}
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

export default Eventos;
