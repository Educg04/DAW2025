import carrito from "./carrito.js";

const sumar = document.querySelector(".sumar");
const restar = document.querySelector(".restar");
const contador = document.querySelector(".contador");
const total = document.querySelector(".totalProd");
const unidad = document.querySelector(".valorUnidad");
const cuerpoTabla = document.querySelector(".cuerpoTabla");

let valorContador = 0;

function botonSumar() {
    valorContador++;
    actualizarContador();
    actualizarTotal();
}

function botonRestar() {
    if (valorContador > 0) {
        valorContador--;
    }
    actualizarContador();
    actualizarTotal();
}

function actualizarContador() {
    contador.value = valorContador;
}

function actualizarTotal() {
    valorContador = contador.value;
    total.innerHTML = (valorContador * parseFloat(unidad.textContent.replace('€','', ';', ',', '.'))).toFixed(2) + '€'
}

contador.addEventListener('blur', () => actualizarTotal());


sumar.addEventListener("click", botonSumar);
restar.addEventListener("click", botonRestar);

function insertarTabla() {
    const listuca = carro.getListaProductos();
    listuca.array.forEach(element => {
        /*<tr>
        <td>Ifhone 13 Pro</td>
        <td>
            <div class="number"><button class="restar" id="restar">-</button><input class="contador" id="contador"></input><button class="sumar" id="sumar">+</button>
            </div>
        </td>
        <td class="valorUnidad">1.5 €  </td>
        <td class="totalProd">0</td>
        </tr>
        */
        cuerpoTabla.innerHTML
       
    });
}

const carrochulito = new carrito();

  function cargarProductos (json) {
        carrochulito.setListaProductos(json.products);
        carrochulito.setCurrency(json.currency);
        console.log(carrochulito.getListaProductos());

    }

    fetch(' https://jsonblob.com/api/jsonBlob/1294296496458293248')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        cargarProductos(data);
    })
    .catch(function(error) {
        console.log(error);
    });
