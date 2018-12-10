class NegotiationList {

    constructor() {

        this._negotiations = [];
    }

    add(negotiation) {

        this._negotiations.push(negotiation);
    }

    get negotiations() {

        return [].concat(this._negotiations); //programação defensiva com array. Criando cópia da lista! 
    }
}