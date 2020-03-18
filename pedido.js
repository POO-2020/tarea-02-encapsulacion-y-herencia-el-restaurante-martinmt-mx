import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js"
import ElementoPedido from "./elementoPedido.js"
export default class Pedido{
/**
 * 
 * @param {number} numeroPedido 
 * @param {Fecha} fecha 
 * @param {Tiempo} hora 
 * @param {Cliente} cliente 
 */
    constructor({numeroPedido, fecha, hora, cliente}){
        this._numeroPedido = numeroPedido
        this._fecha = fecha
        this._hora = hora
        this._cliente = cliente
        this._elementosPedido = new Array()
    }
    _getNumeroPedido(){
        return this._numeroPedido
    }
    _esIgualA(pedido) {
        if (pedido._getNumeroPedido() === this._numeroPedido) {
            return true
        }
    }
    
    agregarElemento(elementoPedido){
        this._elementosPedido.push(elementoPedido)
    }
    listarElementos(){
        this._elementosPedido.forEach((elementoPedido, i) => {
            console.log(`${i} - ${elementoPedido.getDescripcion()}`)
        })
    }
    getResumen(){
        return `${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this.getNumeroElementos()} Elementos con ${this.getProductos()} Productos, Total: ${this.getCostoTotal()}`
    }
    getNumeroElementos(){
        return `${this._elementosPedido.length}`
    }
    getProductos(){
        let i = 0
        this._elementosPedido.forEach(elementoPedido => {i = elementoPedido._getCantidad() + i})
        return i
    }
    getCostoTotal(){
        let i = 0
        this._elementosPedido.forEach(elementoPedido => {i = (elementoPedido._getCantidad() * elementoPedido._getProductoPrecioValor()) + i})
        return `$${new Intl.NumberFormat("en-US").format(i)}`
    }
    
}