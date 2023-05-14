import {SmallBox} from '@app/components';
import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import {logoutUser} from '@app/store/reducers/auth';
import {useNavigate} from 'react-router-dom';
import intance from '@app/utils/axios';
import store from '@app/store/store';

const Dashboard = () => {
  const [statuses, setStatuses] = useState(null);
  const navigate = useNavigate();

  const getTickets = async () => {
    intance
      .get('/tickets-status')
      .then((response) => {
        setStatuses(response.data);
      })
      .catch((error) => {
        store.dispatch(logoutUser());
        navigate('/login');
      });
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>
      <ContentHeader title="Interfaz" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-primary">
                <div className="inner">
                  <h3>{statuses ? statuses[0].tickets.length : 0}</h3>

                  <p>Tickets {statuses ? statuses[0].nombre : ''}</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a
                  onClick={() => navigate('/tickets')}
                  className="btn btn-primary small-box-footer"
                >
                  Ver mas <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{statuses ? statuses[1].tickets.length : 0}</h3>

                  <p>Tickets {statuses ? statuses[1].nombre : ''}</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a
                  onClick={() => navigate('/tickets')}
                  className="btn btn-info small-box-footer"
                >
                  Ver mas <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{statuses ? statuses[2].tickets.length : 0}</h3>

                  <p>Tickets {statuses ? statuses[2].nombre : ''}</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a
                  onClick={() => navigate('/tickets')}
                  className="btn btn-success small-box-footer"
                >
                  Ver mas <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>{statuses ? statuses[3].tickets.length : 0}</h3>

                  <p>Tickets {statuses ? statuses[3].nombre : ''}</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a
                  onClick={() => navigate('/tickets')}
                  className="btn btn-danger small-box-footer"
                >
                  Ver mas <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{statuses ? statuses[4].tickets.length : 0}</h3>

                  <p>Tickets {statuses ? statuses[4].nombre : ''}</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a
                  onClick={() => navigate('/tickets')}
                  className="btn btn-warning small-box-footer"
                >
                  Ver mas <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
