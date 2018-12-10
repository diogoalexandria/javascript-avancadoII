//O nome do arquivo é em letra para indicar que é uma classe dentro de models
class Negotiation {
    constructor(date, quantity, value) {
        console.log("Dentro do construtor Negotiation: ");
        console.log(date);
        console.log(typeof(date));
        console.log(date.getTime());
        //this._date = new Date(date[0], date[1], date[2]);//programação defensiva.Solução dada quando o textToDate não estava retornando um objteto Date.
        this._date = new Date(date.getTime());//programação defensiva. Não funciona, descobrir pq! textToDate() não estava retornando um objeto Date. resolvido!
        this._quantity = quantity;
        this._value = value;
        Object.freeze(this);
    }

    get date(){
        return  new Date(this._date.getTime());//Programação defensiva.Se tentarem acessar o atributos do bjto vão apenas acessar a cópia
    }
    get quantity(){
        return this._quantity;
    }
    get value(){
        return this._value;
    }
    get volume() {
        return this._quantity * this._value;
    }
}