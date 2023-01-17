import StatusCard from '../component/StatusCard';
import Tickets from '../component/Tickets';
import Perfil from '../component/Perfil';
import { 
    Container,
    Row,
    Col
} from 'reactstrap';

const styles ={
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '30px',
    height: '100vh',
}
const Home = () => (
    <Container 
        fluid
    >
        <Row  style={styles}>
            <Col xs="8">
                <StatusCard />
                <Tickets />
            </Col>
            <Col xs="4">
                <Perfil />
            </Col>
        </Row>
    </Container>
)

export default Home;
