import { 
  Row,
  Col
} from 'reactstrap';

function StatusCard() {

    return (
      <div>
      
       <Row>
          <Col xs="4">
            <div class="shadow-sm statusCard">
                <div class="iconStatus bg-warning"> 
                  <span class="card-category">5</span>
                </div>
                <div class="numberStatus">
                  <span class="card-category">5</span>
                  <p class="card-title">Pendientes</p>
                </div>
            </div>
          </Col>

          <Col xs="4">
            <div class="shadow-sm statusCard">
                <div class="iconStatus  bg-info"> 
                  <span class="card-category">5</span>
                </div>
                <div class="numberStatus">
                  <span class="card-category">5</span>
                  <p class="card-title">Pendientes</p>
                </div>
            </div>
          </Col>

          <Col xs="4">
            <div class="shadow-sm statusCard">
                <div class="iconStatus bg-success"> 
                  <span class="card-category">5</span>
                </div>
                <div class="numberStatus">
                  <span class="card-category">10</span>
                  <p class="card-title">Cerrados</p>
                </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default StatusCard;
  