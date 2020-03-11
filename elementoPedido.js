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
    getDescripcion(){
        let precioFinal = this.cantidad * this.producto.precio.valor
        return `${this.cantidad} x ${this.producto.nombre} $${new Intl.NumberFormat("en-US").format(precioFinal)}`
    }
}