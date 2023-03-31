/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import intance from '@app/utils/axios';
import {AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import {DateTime} from 'luxon';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    intance
      .post('/tickets/comentarios', {
        comentarios: comentario,
        ticket_id: id
      })
      .then((response: AxiosResponse) => {
        const res = response.data.data;
        toast.success(res.message);
        getComentarios();
        setComentario('');
      })
      .catch((error: any) => {
        toast.error('Algo salio mal');
      });
  };

  const getComentarios = async () => {
    const response = await intance
      .get(`/tickets/lista-comentarios/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        toast.error('Algo salio mal');
      });

    if (response) {
      setComentarios(response.data);
    }
  };

  useEffect(() => {
    getComentarios();
  }, []);

  return (
    <div>
      <ContentHeader title="Comentarios" />
      <section className="content">
        <div className="container-fluid">
          <div className="card card-dark direct-chat direct-chat-dark card-outline">
            <div className="card-header">
              <h3 className="card-title">Comentarios</h3>
              <div className="card-tools">
                <span
                  data-toggle="tooltip"
                  title="3 New Messages"
                  className="badge badge-light"
                >
                  {comentarios.length}
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="direct-chat-messages">
                {comentarios.map((element: any) => {
                  if (element.tipo_usuario !== 'emisor') {
                    return (
                      <div className="direct-chat-msg" key={element.id}>
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            {element.usuario.name}
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            {DateTime.fromISO(element.created_at)
                              .setLocale('es')
                              .toRelative()}
                          </span>
                        </div>
                        <img
                          className="direct-chat-img"
                          src={`https://ui-avatars.com/api/?name=${element.usuario.name}&background=0D8ABC&color=fff&size=128`}
                          alt="message user image"
                        />
                        <div className="direct-chat-text">
                          {element.comentarios}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="direct-chat-msg right" key={element.id}>
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-right">
                          {element.usuario.name}
                        </span>
                        <span className="direct-chat-timestamp float-left">
                          {DateTime.fromISO(element.created_at)
                            .setLocale('es')
                            .toRelative()}
                        </span>
                      </div>
                      <img
                        className="direct-chat-img"
                        src={`https://ui-avatars.com/api/?name=${element.usuario.name}&background=0D8ABC&color=fff&size=128`}
                        alt="message user image"
                      />
                      <div className="direct-chat-text">
                        {element.comentarios}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="direct-chat-contacts" />
            </div>
            <div className="card-footer">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="hidden"
                    name="ticket_id"
                    value="{{ $ticket->id }}"
                  />
                  <input
                    type="text"
                    name="comentarios"
                    placeholder="Escribir comentario ..."
                    className="form-control"
                    onChange={(evt) => setComentario(evt.target.value)}
                  />
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      Comentar
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comentarios;
