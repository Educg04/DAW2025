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





 

const carrochulito = new carrito();

    function insertarTabla() {
       /* <tr>
        <td>Ifhone 13 Pro</td>
        <td>
            <div class="number"><button class="restar" id="restar">-</button><input class="contador" id="contador"></input><button class="sumar" id="sumar">+</button>
            </div>
        </td>
        <td class="valorUnidad">1.5 €  </td>
        <td class="totalProd">0</td>
        </tr>
    */
        const listucaProd = carrochulito.getListaProductos();
    
    
        listucaProd.forEach((producto, SKU) => {
            let fila = document.createElement('tr');
            fila.classList.add('fila-of-product');

            //Creo la columna de info producto
            let celdaTitulo = document.createElement('td');
            const titulo = document.createElement('h2');
            titulo.innerText = producto.title;
            const ref = document.createElement('p');
            ref.classList.add('text-producto-pequeno');
            ref.innerText = `Ref: ${SKU}`;

            //Creo la columna de introducir la cantidad de productos deseados
            let celdaCantidad = document.createElement('td');
            let divCantidad = document.createElement('div');
            divCantidad.classList.add('number');
            const buttonMenos = document.createElement('button');
            buttonMenos.classList.add('restar');
            buttonMenos.innerText = '-';
            const inputCantidad = document.createElement('input')
            inputCantidad.classList.add('contador');
            inputCantidad.value = 0;
            const buttonMas = document.createElement('button');
            buttonMas.classList.add('sumar');
            buttonMas.innerText = '+';

            //Creo columna de valor por unidad
            let celdaUnidad = document.createElement('td');
            let valorUnidad = document.createElement('p')
            valorUnidad.innerText = producto.price + '€'
            valorUnidad.classList.add('valorProducto');


            let celdaTotalProduct = document.createElement('td');
            let valorTotalProduct = document.createElement('p')
            valorTotalProduct.innerText = '0'
            valorTotalProduct.classList.add('valorProducto');
            

            celdaTitulo.appendChild(titulo);
            celdaTitulo.appendChild(ref);
            fila.appendChild(celdaTitulo);

            celdaCantidad.appendChild(divCantidad);
            divCantidad.appendChild(buttonMenos);
            divCantidad.appendChild(inputCantidad);
            divCantidad.appendChild(buttonMas);
            fila.appendChild(celdaCantidad);

            celdaUnidad.appendChild(valorUnidad);
            fila.appendChild(celdaUnidad);

            celdaTotalProduct.appendChild(valorTotalProduct);
            fila.appendChild(celdaTotalProduct);

            //Añado la fila
            cuerpoTabla.appendChild(fila);

            buttonMas.addEventListener('click', function() {
                let valorContador = parseInt(inputCantidad.value);
                valorContador++;
                inputCantidad.value = valorContador;
                valorTotalProduct.innerText = valorContador * parseFloat(valorUnidad.textContent.replace('€','', ';', ',', '.')).toFixed(2) + '€'
                const lineaCompra 
                carrochulito.actualizarUnidades(producto.SKU, valorContador);
            });
     
            buttonMenos.addEventListener('click', function() {
                let valorContador = parseInt(inputCantidad.value);
                if (valorContador > 0) {
                    valorContador--;
                }
                inputCantidad.value = valorContador;
                valorTotalProduct.innerText = valorContador * parseFloat(valorUnidad.textContent.replace('€','', ';', ',', '.')).toFixed(2) + '€'

            });

            inputCantidad.addEventListener('blur', function() {
                valorContador = inputCantidad.value;
                valorTotalProduct.innerText = valorContador * parseFloat(valorUnidad.textContent.replace('€','', ';', ',', '.')).toFixed(2) + '€'
            });
    });
    
}
 
  function cargarProductos (json) {
        carrochulito.setListaProductos(json.products);
        carrochulito.setCurrency(json.currency);
        console.log(carrochulito.getListaProductos());

    }
    
    fetch('http://jsonblob.com/api/jsonBlob/1296836936260771840')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        cargarProductos(data);
        insertarTabla();
    })
    .catch(function(error) {
        console.log(error);
    });
