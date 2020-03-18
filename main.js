import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./dirección.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Cliente from "./cliente.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"
import ClienteFrecuente from "./clienteFrecuente.js"
class Main{
    constructor(){
        let datosCliente1 = {nombre: "Martin Mojica Torres", direccion: new Direccion("calle 13", 13, 3, "Colonia Alta", 32133, "Ciudad", "Municipio"), telefono: 3122739451}
        let datosPedido1 = {numeroPedido: 1, fecha: new Fecha(3,4,2021), hora: new Tiempo(5,30,"pm"), cliente: new Cliente(datosCliente1)}
        this.pedido1 = new Pedido(datosPedido1)
        let datosRestaurante = {nombre: "OXXO", telefono: 3128889900, direccion: new Direccion("Benito Juarez", 152, 0, "Centro", 22442, "Colima", "Colima")}
        this.restaurante = new Restaurante(datosRestaurante)
    }
    probarFecha(){
        let fecha1 = new Fecha(12,4,2022)
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getFecha())
        console.log(fecha1.getDiaFecha())
    }
    probarTiempo(){
        let tiempo = new Tiempo(11, 32, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }
    probarClienteFrecuente() {
        let datosCliente1 = {nombre: "Martin Mojica Torres", 
            direccion: new Direccion("Benito Juarez", 152, 0, "Centro", 22442, "Colima", "Colima"), 
            telefono: 3122739451,
            numero: 2,
            fecha: new Fecha(7,3,2018)}
        let cliente = new ClienteFrecuente(datosCliente1)
        console.log(cliente.getPerfil())
    }
    probarDireccion(){
        let direc1 = new Direccion("Benito Juarez", 152, 0, "Centro", 22442, "Colima", "Colima")
        let direc2 = new Direccion("Benito Juarez", 152, 253, "Centro", 22442, "Colima", "Colima")
        console.log(direc1.getFormatoCorto())
        console.log(direc1.getFormatoExtendidio())
        console.log(direc2.getFormatoCorto())
        console.log(direc2.getFormatoExtendidio())
    }
    probarPrecios(){
        let precio1 = new Precio(1442.32)
        console.log(precio1.getPrecios())
    }
    probarProducto(){
        let producto1 = new Producto("Pizza Hawaiana", new Precio(600.50))
        console.log(producto1.getDescripcion())
    }
    probarElementoPedido(){
        let pedido1 = new ElementoPedido(new Producto("Pizza Hawaiana", new Precio (600.50)), 2)
        console.log(pedido1.getDescripcion())
    }
    probarCliente(){
        let datosCliente1 = {nombre: "Martin Mojica Torres", direccion: new Direccion("Benito Juarez", 152, 0, "Centro", 22442, "Colima", "Colima"), telefono: 3122739451}
        let cliente = new Cliente(datosCliente1)
        console.log(cliente.getPerfil())
    }
    probarPedido(){
        let elemento = new ElementoPedido(new Producto("Pizza Hawaiana", new Precio (600.50)), 2)
        this.pedido1.agregarElemento(elemento)
        this.pedido1.listarElementos()
    }
    probarRest(){
        let producto1 = new Producto("Pizza Hawaiana", new Precio(600.50))
        let producto2 = new Producto("Pizza Mexicana", new Precio(700))
        this.restaurante.registrarProducto(producto1)
        this.restaurante.registrarProducto(producto2)
        this.restaurante.listarProductos()
        let datosCliente1 = {nombre: "Martin Mojica Torres", direccion: new Direccion("Benito Juarez", 152, 0, "Centro", 22442, "Colima", "Colima"), telefono: 3122739451}
        let datosPedido1 = {numeroPedido: 1, fecha: new Fecha(3,4,2021), hora: new Tiempo(5,30,"pm"), cliente: new Cliente(datosCliente1)}
        let pedido1 = new Pedido(datosPedido1)
        let elemento1 = new ElementoPedido(new Producto("Pizza Hawaiana", new Precio(600.50)), 3)
        let elemento2 = new ElementoPedido(new Producto("Pizza Mexicana", new Precio(700)), 5)
        pedido1.agregarElemento(elemento1)
        this.restaurante.registrarPedido(pedido1)
        let datosCliente2 = {nombre: "Martin Mojica Torres", direccion: new Direccion("Benito Juarez", 152, 0, "Centro", 22442, "Colima", "Colima"), telefono: 3122739451}
        let datosPedido2 = {numeroPedido: 2, fecha: new Fecha(3,4,2021), hora: new Tiempo(5,30,"pm"), cliente: new Cliente(datosCliente2)}
        let pedido2 = new Pedido(datosPedido2)
        pedido2.agregarElemento(elemento1)
        pedido2.agregarElemento(elemento2)
        
        this.restaurante.registrarPedido(pedido2)
        this.restaurante.listarPedidos()
        this.restaurante.eliminarPedido(pedido1)
        this.restaurante.listarPedidos()
        this.restaurante.actualizarPedido(pedido2, pedido1)
        this.restaurante.listarPedidos()
    }
}
let app = new Main()
app.probarFecha()
app.probarTiempo()
app.probarDireccion()
app.probarPrecios()
app.probarProducto()
app.probarElementoPedido()
app.probarCliente()
app.probarPedido()
app.probarRest()
app.probarClienteFrecuente()