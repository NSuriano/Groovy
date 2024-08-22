
//tablero

const tablero = document.querySelector("[data-tablero]");
const columna= document.querySelector("[data-lista]");
const tarjeta = document.querySelector("[data-tarjeta]");
const addLista = document.querySelector("[data-add]");

addLista.addEventListener('click', crearLista);

function crearLista () {
    const lista = document.createElement("div");
    lista.className ="columna";
    lista.innerHTML = `<h3 class="titulo-lista">Mis reportes</h3>

          <div class="tarjeta" data-tarjeta>
            <p class="titulo-tarjeta">Lista de tareas con urgencia</p>

            <div class="iconos">
              <i class="bx bx-detail"></i>
              <i class="bx bx-message"></i>
              <i class="bx bx-paperclip"></i>
            </div>
          </div>

          <div class="pie">
            <span>Agregar tarjeta <i class="bx bx-plus"></i></span>
            <img src="imagenes/agrandar.png" alt="agrandar" />
          </div>
         </div>
        `;

}



