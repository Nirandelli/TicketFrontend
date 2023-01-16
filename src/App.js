import StatusCard from  './component/StatusCard';
import Table from './component/Table';
import Perfil from './component/Perfil';
import './style.css';

function App() {
  return (
    <div>
      <div class="container-fluid">
        
        <div class="row align-items-center">
          <div class="col-8">
            <StatusCard/>
            <Table/>
          </div>
          <div class="col-4">
            <Perfil/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
