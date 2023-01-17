
import React, { useState } from 'react';
import {
  Table,
  CardTitle,
  Button,
  Badge,
  Card,
  CardBody,
  CardColumns,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label,
  // FormText
} from 'reactstrap';

const Tickets = (props) => {
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = (e) => {
    let { value } = e.target;
    setUnmountOnClose(JSON.parse(value));
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h4">MIS TICKETS</CardTitle>
        <CardColumns  className="text-end my-2">
          <Button outline color="danger" onClick={toggle}>Crear Ticket</Button>
        </CardColumns><br></br>
        <Table hover>
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ticket</th>
              <th scope="col">status</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td><Badge color="success">Cerrado</Badge></td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td><Badge color="warning">Pendiente</Badge></td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td><Badge color="info">Proceso</Badge></td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td><Badge color="danger">Cancelado</Badge></td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>

      <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose} size="xl">
        <ModalHeader toggle={toggle}>Crear Ticket</ModalHeader>
        <ModalBody>
        <Form >
          <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
              <Label for="correo" className="mr-sm-2">
                  Nombre
              </Label>
              <Input
                  type="email"
                  name="email"
                  id="correo"
                  placeholder="example: Pagina no carga"
              />
          </FormGroup>
          <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
            <Label for="correo" className="mr-sm-2">
              Descripción
            </Label>
            <Input
              type="textarea"
              placeholder="Descripción la situaación con la que desea ayuda"
              rows={5}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">
              Evidencia
            </Label>
            <Input
              id="exampleFile"
              name="file"
              type="file"
            />
            {/* <FormText>
              This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
            </FormText> */}
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Guardar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
}

export default Tickets;
