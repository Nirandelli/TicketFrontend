
function Perfil() {
    return (
      <div>
        <div class="card">
            <div class="cardImg">
                <img src="https://midgrab.mx/services_test/public/midgrab/perfil.png"  alt="..."></img>
            </div>
            <div class="namePerfil">
                <h4 class="mb-2 justify-center">
                Nirandelli Patricio Mayo
                </h4>
                <h6 class="text-h6 font-weight-regular grey--text">
                Administrador Operativo
                </h6>
            </div>
          <div>
            <ul class="listDatosCont">
              <li>
                <span> Email:</span>
                delli.patricio.mayo@gmail.com
              </li>
              <li>
                <span> Teléfono:</span>
                9932065554
              </li>
            </ul>
          </div>
          <div class="cerrarSesion">
            <button type="button" class="btn btn-outline-secondary">Cerrar sesión</button>
          </div>
        </div>
      </div>
    );
}

export default Perfil;
