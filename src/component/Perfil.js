import { 
  Card,
  CardImg,
  CardColumns,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  List, Button } from 'reactstrap';

const Perfil = () => {
  return (
      <Card>
        <CardColumns style={{
          height: '10%',
            width: '25%',
            margin: 'auto'
          }}
        >
          <CardImg src="https://midgrab.mx/services_test/public/midgrab/perfil.png" alt="..."></CardImg>
        </CardColumns>
        
        <CardColumns
          className="text-center"
        >
          <CardTitle tag="h4" class="align-items-center">
            Nirandelli Patricio Mayo
          </CardTitle>
          <CardSubtitle  tag="h6" class="mb-2 text-muted">
            Administrador Operativo
          </CardSubtitle>
        </CardColumns>
        <CardText>
          <List type="unstyled">
            <li>
              <span> Email:</span>
                delli.patricio.mayo@gmail.com
            </li>
            <li>
              <span> Teléfono:</span>
                9932065554
            </li>
          </List>
        </CardText>
        <CardBody className="text-center">
          <Button  outline>Cerrar sesión</Button>
        </CardBody>
      </Card>
  );
}

export default Perfil;
