import Direccion from "./dirección.js"

export default class Cliente{
    /**
     * 
     * @param {string} nombre 
     * @param {Direccion} dirección
     * @param {number} telefono 
     */
    constructor(nombre, dirección, telefono){
        this.nombre = nombre
        this.dirección = dirección
        this.telefono = telefono
    }
    getPerfil(){
        return `${this.nombre}, ${this.dirección.getFormatoCorto()}, ${this.telefono}`
    }
}