
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

    getCurrency () {
        return this.#currency;
    }

    setTotal (total) {
        this.#total = total;
    }

    getTotal () {
        return this.#total;
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
   


    