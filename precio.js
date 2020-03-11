export default class Precio{
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this.valor = valor
    }
    getPrecios(){
        return `$${new Intl.NumberFormat("en-UA").format(this.valor)}`
    }
}