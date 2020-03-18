export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
    constructor(hora, minutos, periodo = "am"){
        this._hora = hora
        this._minutos = minutos
        this._periodo = periodo.toLowerCase()
    }
    getFormato12(){
        if (this._periodo === "am" && this._hora==12){
            return `${this._hora - 12}:${this._minutos} ${this._periodo}`
        }
        else if (this._periodo === "pm" && this._hora>12){
            return `${this._hora - 12}:${this._minutos} ${this._periodo}`
        }
        else{
            return `${this._hora}:${this._minutos} ${this._periodo}`
        }
    }
    getFormato24(){
        this._hora24 = this._hora
        if (this._periodo === "am" && this._hora==12){
            return `${this._hora - 12}:${this._minutos} ${this._periodo}`
        }
        else if (this._periodo === "pm" && this._hora < 12){
            return `${this._hora24+12}:${this._minutos} ${this._periodo}`
        }
        else{
            return `${this._hora}:${this._minutos} ${this._periodo}`
        }
        
    }
}
