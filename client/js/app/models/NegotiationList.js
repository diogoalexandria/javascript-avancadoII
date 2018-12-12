class NegotiationList {

    constructor(trap) {

        this._negotiations = [];
        this._trap = trap;        
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
        this._trap(this);
        //Reflect.apply(this._trap, this._context, [this]); //Reflect.apply(function, thisArgumentContext, argumentsFunctionList); Altera o contexto da função q será chamada. Por exemplo a função que é passada ao construtor de negotiationList deve ser executada com o this do contexto do negotiationController.
    }

    clear() {
        this._negotiations = [];
        this._trap(this);
        //Reflect.apply(this._trap, this._context, [this]);
    }

    get negotiations() {
        return [].concat(this._negotiations); //Programação defensiva com array. Criando cópia da lista! 
    }
}