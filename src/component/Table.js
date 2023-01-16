
function Table() {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">MIS TICKETS</h5>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-outline-secondary">Crear Ticket</button>
          </div><br></br>
          <div class="table-responsive">
            <table class="table">
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
                  <td><span class="badge bg-success">Cerrado</span></td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td><span class="badge bg-warning text-dark">Pendiente</span></td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td><span class="badge bg-info text-dark">Proceso</span></td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td><span class="badge bg-danger">Cancelado</span></td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
