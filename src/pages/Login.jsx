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

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Iniciar sesión
                            </CardTitle>
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
                                <Button type="submit" color="primary">
                                    Login
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
