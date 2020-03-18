import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./dirección.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Cliente from "./cliente.js"
import Pedido from "./pedido.js"
export default class Restaurante{
    /**
     * 
     * @param {string} nombre 
     * @param {number} telefono 
     * @param {Direccion} direccion 
     */
    constructor({nombre, telefono, direccion}){
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._productos = new Array()
        this._pedidos = new Array()
    }

    registrarProducto(producto){
        this._productos.push(producto.getDescripcion())
    }

    listarProductos(){
        this._productos.forEach((producto, i) => {
            console.log(`${i+1} ${producto}`)
        })
    }

    _buscarPedido(pedido){
        let result = this._pedidos.find(p => p._esIgualA(pedido))
        return result
    }

    registrarPedido(pedido){
        if (this._buscarPedido(pedido) !== undefined){
            return false
        }
        this._pedidos.push(pedido)
        return true
    }

    eliminarPedido(pedido){
        let result = this._buscarPedido(pedido)
        if(result < 0) {
            return false
        }
        this._pedidos.splice(result, 1)
        return true
    }

    actualizarPedido(pedido, nuevoPedido) {
        let result = this._buscarPedido(pedido)
        if(result < 0) {
            return false
            
        }
        this._pedidos.splice(result, 1, nuevoPedido)
        return true
    }

    listarPedidos(){
        this._pedidos.forEach((pedido, i) =>{
            console.log(`${i+1} ${pedido.getResumen()}`)
        })
    }
    
}