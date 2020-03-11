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
    constructor(nombre, telefono, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.productos = new Array()
        this.pedidos = new Array()
    }
    registrarProducto(producto){
        this.productos.push(producto.getDescripcion())
    }
    listarProductos(){
        this.productos.forEach((producto, i) => {
            console.log(`${i+1} ${producto}`)
        })
    }
    registrarPedido(pedido){
        this.pedidos.push(pedido.getResumen())
    }
    listarPedidos(){
        this.pedidos.forEach((pedido, i) =>{
            console.log(`${i+1} ${pedido}`)
        })
    }
}