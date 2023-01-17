import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    CardColumns,
    CardImg,
} from "reactstrap";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (evt) => {
        evt.preventDefault();
        if (!username || !password) {
            return;
        }
    };

    const styles ={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
    return (
        <Container>
            <Row style={styles}>
                <Col xs="6">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h4" className="text-center">
                                Iniciar sesión
                            </CardTitle>
                            <CardColumns style={{
                                height: '10%',
                                    width: '25%',
                                    margin: 'auto'
                                }}
                                >
                                <CardImg src="https://midgrab.mx/services_test/public/midgrab/perfil.png" alt="..."></CardImg>
                            </CardColumns>
                            <Form onSubmit={login}>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="correo" className="mr-sm-2">
                                        Correo
                                    </Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="correo"
                                        placeholder="example@gmail.com"
                                        onChange={(ev) => setUsername(ev.currentTarget.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                    <Label for="contrasena" className="mr-sm-2">
                                        Contraseña
                                    </Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="contrasena"
                                        placeholder="*********"
                                        onChange={(ev) => setPassword(ev.currentTarget.value)}
                                    />
                                </FormGroup>
                                <CardColumns  className="text-center my-2">
                                    <Button type="submit" color="primary" outline>
                                        Login
                                    </Button>
                                </CardColumns>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
