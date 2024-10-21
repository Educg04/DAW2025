
export default class carrito {

    #total
    #listaProductos
    #currency

    constructor() {
        this.#listaProductos = new Map();
        this.#total = 0;
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
        let totalCarrito = 0;
        this.#listaProductos.forEach(producto => {
            totalCarrito += parseInt(producto.quantity) * parseFloat(producto.price);
        });
        return totalCarrito.toFixed(2)
    }

    actualizarUnidades(sku, lineaCompra){
        if (lineaCompra.quantity > 0) {
            this.#listaProductos.set(sku, lineaCompra);  
        } else {
            this.#listaProductos.delete(sku);
        }    
        
        this.#total = this.calculoTotalCarrito();
    }

    obtenerInforProd(sku){
        return this.#listaProductos.get(sku);
    }

    obtenerCarrito() {
    // Convertir el Map a un array de pares clave-valor
    const mapToArray = Array.from( this.#listaProductos);

    // Convertir el array a JSON
    const jsonString = JSON.stringify(mapToArray);
        
        return {
            Total: this.#total,
            currency: this.#currency,
            products: jsonString,
        };
    }
 
}
   


    