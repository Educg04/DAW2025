class carrito {

    #total
    #listaProductos

    constructor(listaProductos) {
        this.listaProductos = new Map();
        this.total = 0;
    }

    calculoTotalCarrito() {
    }

    actualizarUnidades(sku, lineaCompra){

    }

    obtenerInforProd(sku){
    }

    obtenerCarrito(){
    }
}
   cargarProductos (json) {
    listaProductos = productos.products;
    currency = productos.currency;
    console.log(listaProductos);
   }

   fetch("http://jsonblob.com/1294296496458293248")
    .then(response => response.json())
    .finally(console.log("Se ha llamado a un servidor"))
    .then(cargarProductos(response));