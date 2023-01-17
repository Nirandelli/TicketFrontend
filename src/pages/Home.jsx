import StatusCard from '../component/StatusCard';
import Tickets from '../component/Tickets';
import Perfil from '../component/Perfil';

const Home = () => (
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-8">
                <StatusCard />
                <Tickets />
            </div>
            <div class="col-4">
                <Perfil />
            </div>
        </div>
    </div>
)

export default Home;
