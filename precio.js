export default class Precio{
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this._valor = valor
    }
    getPrecios(){
        return `$${new Intl.NumberFormat("en-UA").format(this._valor)}`
    }
    _getValor(){
        return this._valor
    }
}