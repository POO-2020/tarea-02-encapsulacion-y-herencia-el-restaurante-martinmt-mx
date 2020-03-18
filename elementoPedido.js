import Producto from "./producto.js"
export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad){
        this._producto = producto
        this._cantidad = cantidad
    }
    _getProductoPrecioValor(){
        return this._producto._getPrecioValor()
    }
    _getCantidad(){
        return this._cantidad
    }
    getDescripcion(){
        let precioFinal = this._cantidad * this._producto._getPrecioValor()
        return `${this._cantidad} x ${this._producto._getNombre()} $${new Intl.NumberFormat("en-US").format(precioFinal)}`
    }
    
}