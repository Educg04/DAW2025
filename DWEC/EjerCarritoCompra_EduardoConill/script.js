const sumar = document.querySelector(".sumar");
const restar = document.querySelector(".restar");
const contador = document.querySelector(".contador");
const total = document.querySelector(".totalProd");
const unidad = document.querySelector(".valorUnidad");

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
