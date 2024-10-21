import carrito from "./carrito.js";
const listaProductosAlaVenta = new Map();


const cuerpoTabla = document.querySelector(".cuerpoTabla");
const precioTotalCarrito = document.querySelector(".dinericoAPagar");
const listaOfProdInCarr = document.querySelector(".listaOfProdInCarr");

const carrochulito = new carrito();

    function insertarTabla() {
        listaProductosAlaVenta.forEach((producto, SKU) => {
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
            inputCantidad.type = "number";
            inputCantidad.classList.add('contador');
            inputCantidad.value = 0;
            const buttonMas = document.createElement('button');
            buttonMas.classList.add('sumar');
            buttonMas.innerText = '+';

            //Creo columna de valor por unidad
            let celdaUnidad = document.createElement('td');
            let valorUnidad = document.createElement('p')
            valorUnidad.innerText = producto.price + carrochulito.getCurrency();
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
                carrochulito.actualizarUnidades(producto.SKU, valorContador);
                valorTotalProduct.innerText = (valorContador * parseFloat(valorUnidad.textContent.replace('€','', ';', ',', '.'))).toFixed(2) + carrochulito.getCurrency();
        
                producto.quantity = inputCantidad.value;
                listaProductosAlaVenta.set(producto.SKU, producto);
                carrochulito.actualizarUnidades(producto.SKU, listaProductosAlaVenta.get(producto.SKU));
                console.log(carrochulito.getListaProductos());

                console.log(carrochulito.getTotal());
                actualizarTotalCarrito(producto.SKU);       
            });
     
            buttonMenos.addEventListener('click', function() {
                let valorContador = parseInt(inputCantidad.value);
                if (valorContador > 0) {

                    valorContador--;
                    inputCantidad.value = valorContador;
                    valorTotalProduct.innerText = valorContador * parseFloat(valorUnidad.textContent.replace('€','', ';', ',', '.')).toFixed(2) + carrochulito.getCurrency();
                  
                    producto.quantity = inputCantidad.value;
                    listaProductosAlaVenta.set(producto.SKU, producto);
                    carrochulito.actualizarUnidades(producto.SKU, listaProductosAlaVenta.get(producto.SKU));
                    console.log(carrochulito.getListaProductos());
                } 
                actualizarTotalCarrito(producto.SKU);       

                console.log(carrochulito.getTotal());

            });

            inputCantidad.addEventListener('blur', function() {
                let valorContador = parseInt(inputCantidad.value);

                valorContador = inputCantidad.value;
                valorTotalProduct.innerText = valorContador * parseFloat(valorUnidad.textContent.replace('€','', ';', ',', '.')).toFixed(2) + carrochulito.getCurrency();

                producto.quantity = inputCantidad.value;
                listaProductosAlaVenta.set(producto.SKU, producto);
                carrochulito.actualizarUnidades(producto.SKU, listaProductosAlaVenta.get(producto.SKU));
                console.log(carrochulito.getListaProductos());
                    
                if (valorContador < 0) {
                    valorContador = 0;
                    inputCantidad.value = valorContador;
                    valorTotalProduct.innerText = valorContador * parseFloat(valorUnidad.textContent.replace('€','', ';', ',', '.')).toFixed(2) + carrochulito.getCurrency();
                }

                console.log(carrochulito.getTotal());
                actualizarTotalCarrito(producto.SKU);       
            });
        });
    }

    function actualizarTotalCarrito(sku) {
        let liDoesExist = false;
        let lis = listaOfProdInCarr.querySelectorAll('li');
        precioTotalCarrito.innerText = carrochulito.calculoTotalCarrito() + carrochulito.getCurrency();
        let productoAPrintar = carrochulito.obtenerInforProd(sku);
        let classofli;
        lis.forEach(li => {

            if (sku === li.classList.value) {
                liDoesExist = true;
                classofli = li.classList.value;
            }
        });

        if (liDoesExist === true) {
            const liAborrar = document.getElementById(sku);
            console.log(liAborrar);

            listaOfProdInCarr.removeChild(liAborrar);
            let liAnadir = document.createElement('li');
            liAnadir.classList.add(productoAPrintar.SKU);
            liAnadir.id = productoAPrintar.SKU;

            liAnadir.innerText = productoAPrintar.quantity + " x " + productoAPrintar.title +  " => " + (productoAPrintar.quantity * parseFloat(productoAPrintar.price)).toFixed(2) + carrochulito.getCurrency();
            listaOfProdInCarr.appendChild(liAnadir);
        }
        else if (productoAPrintar.quantity > 0) {
            let liAnadir = document.createElement('li');
            liAnadir.classList.add(productoAPrintar.SKU);
            liAnadir.id = productoAPrintar.SKU;

            liAnadir.innerText = productoAPrintar.quantity + " x " + productoAPrintar.title + " => " + (productoAPrintar.quantity * parseFloat(productoAPrintar.price)).toFixed(2) + carrochulito.getCurrency();
            listaOfProdInCarr.appendChild(liAnadir);
        } 
    }

    function setListaProductosAlaVenta (listaDeProductos) {
        listaDeProductos.forEach(producto => {
            listaProductosAlaVenta.set(producto.SKU,producto);
        });
    }
 
    function cargarProductos (json) {
        setListaProductosAlaVenta(json.products);
        carrochulito.setCurrency(json.currency);
        carrochulito.setListaProductos(new Map());
        console.log(listaProductosAlaVenta);
        console.log(carrochulito.getListaProductos());
    }
    
    fetch('http://jsonblob.com/api/1297294588556206080')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        cargarProductos(data);
        insertarTabla();
    })
    .catch(function(error) {
        console.log(error);
    });
