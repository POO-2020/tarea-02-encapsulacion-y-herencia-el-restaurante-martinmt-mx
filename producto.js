import Precio from "./precio.js"

export default class Producto{
    /**
     * 
     * @param {string} nombre 
     * @param {Precio} precio 
     */
    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
    }
    _getPrecioValor(){
        return this._precio._getValor()
    }
    _getPrecio(){
        return this._precio
    }
    _getNombre(){
        return this._nombre
    }
    getDescripcion(){
        return `${this._nombre} ${this._precio.getPrecios()}`
    }
}