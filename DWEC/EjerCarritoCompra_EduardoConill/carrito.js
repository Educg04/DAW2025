
export default class carrito {

    #total
    #listaProductos
    #currency

    constructor() {
        this.listaProductos = new Map();
        this.total = 0;
    }

    setListaProductos (listaProductos) {
        this.#listaProductos = new Map();
        listaProductos.forEach(producto => {
            this.#listaProductos.set(producto.SKU,producto);
        });
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
        this.#listaProductos[sku].quantity = 0
        this.#listaProductos[sku].quantity = cantidad

        
    }

    obtenerInforProd(sku){
    }

    obtenerCarrito(){
    }
 
}
   


    