import Producto from "./producto.js"
export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    _getProductoPrecioValor(){
        return this.producto._getPrecioValor()
    }
    getDescripcion(){
        let precioFinal = this.cantidad * this.producto._getPrecioValor()
        return `${this.cantidad} x ${this.producto._getNombre()} $${new Intl.NumberFormat("en-US").format(precioFinal)}`
    }
    
}