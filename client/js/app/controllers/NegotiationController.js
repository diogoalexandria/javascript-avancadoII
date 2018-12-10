class NegotiationController {
    constructor() {
        
        let $ = document.querySelector.bind(document); //bind(document) faz com que o método querySelector pertecente ao document continue sendo apontado para o document mesmo sendo atribuida ao $.
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        this._negotiationsList = new NegotiationList();
        this._negotiationsView = new NegotiationsView($('#negotiationsView'));

        this._negotiationsView.update(this._negotiationsList);
    }

    add(event){
        event.preventDefault();             
        
        let negotiation = this._createNegotiation();
        
        //console.log(date);
        console.log(negotiation.date);     
        console.log(negotiation);

        console.log("Data formatada: " + DateHelper.dateToText(negotiation.date));

        this._negotiationsList.add(negotiation);
        console.log(this._negotiationsList.negotiations);

        this._negotiationsView.update(this._negotiationsList);
        this._cleanForm(); //Limpa o formulário apos adicionar uma negociação.
    }

    _createNegotiation() {
        return new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value
        );
    }    

    _cleanForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;

        this._inputQuantity.focus();
    }
}