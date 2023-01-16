
function StatusCard() {
    return (
      <div>
       <div class="row align-items-start">
          <div class="col-4">
            <div class="shadow-sm statusCard">
                <div class="iconStatus bg-warning"> 
                  <span class="card-category">5</span>
                </div>
                <div class="numberStatus">
                  <span class="card-category">5</span>
                  <p class="card-title">Pendientes</p>
                </div>
            </div>
          </div>

          <div class="col-4">
            <div class="shadow-sm statusCard">
                <div class="iconStatus  bg-info"> 
                  <span class="card-category">5</span>
                </div>
                <div class="numberStatus">
                  <span class="card-category">5</span>
                  <p class="card-title">Pendientes</p>
                </div>
            </div>
          </div>

          <div class="col-4">
            <div class="shadow-sm statusCard">
                <div class="iconStatus bg-success"> 
                  <span class="card-category">5</span>
                </div>
                <div class="numberStatus">
                  <span class="card-category">10</span>
                  <p class="card-title">Cerrados</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default StatusCard;
  