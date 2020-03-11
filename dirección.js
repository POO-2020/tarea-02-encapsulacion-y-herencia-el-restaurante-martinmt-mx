export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior si no tienes, solo escribe: 0
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this.calle = calle
        this.numeroExterior = numeroExterior
        this.numeroInterior = numeroInterior
        this.colonia = colonia
        this.codigoPostal = codigoPostal
        this.ciudad = ciudad
        this.municipio = municipio
    }

    getFormatoCorto(){
        return `${this.calle} ${this.numeroExterior}`
    }

    getFormatoExtendidio(){
        if (this.numeroInterior === 0){
            return `${this.codigoPostal}, ${this.calle} ${this.numeroExterior} (Sin Numero Interior), ${this.colonia}, ${this.ciudad}, ${this.municipio}`
        }
        else{
            return `${this.codigoPostal}, ${this.calle} ${this.numeroExterior} (No. Interior: ${this.numeroInterior}), ${this.colonia}, ${this.ciudad}, ${this.municipio}`
        }
    }
}