
export default class carrito {

    #total
    #listaProductos
    #currency

    constructor() {
        this.listaProductos = new Map();
        this.total = 0;
    }

    setListaProductos (listaProductos) {
        this.#listaProductos = listaProductos;
    }

    getListaProductos () {
        return this.#listaProductos;
    }

    setCurrency (currency) {
        this.#currency = currency;
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
   


    