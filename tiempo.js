export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
    constructor(hora, minutos, periodo = "am"){
        this.hora = hora
        this.minutos = minutos
        this.periodo = periodo.toLowerCase()
    }
    getFormato12(){
        if (this.periodo === "am" && this.hora==12){
            return `${this.hora - 12}:${this.minutos} ${this.periodo}`
        }
        else if (this.periodo === "pm" && this.hora>12){
            return `${this.hora - 12}:${this.minutos} ${this.periodo}`
        }
        else{
            return `${this.hora}:${this.minutos} ${this.periodo}`
        }
    }
    getFormato24(){
        let hora24 = this.hora
        if (this.periodo === "am" && this.hora==12){
            return `${this.hora - 12}:${this.minutos} ${this.periodo}`
        }
        else if (this.periodo === "pm" && this.hora < 12){
            return `${hora24+12}:${this.minutos} ${this.periodo}`
        }
        else{
            return `${this.hora}:${this.minutos} ${this.periodo}`
        }
        
    }
}