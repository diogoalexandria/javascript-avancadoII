class NegotiationController {
    constructor() {
        
        let $ = document.querySelector.bind(document); //bind(document) faz com que o método querySelector pertecente ao document continue sendo apontado para o document mesmo sendo atribuida ao $.
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');


        this._negotiationsList = new NegotiationList(model => this._negotiationsView.update(model));       
        //this._negotiationsList = new NegotiationList(this, function(model){
        //    this._negotiationsView.update(model);
        //});


        
        this._negotiationsView = new NegotiationsViews($('#negotiationsView'));
        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));

        
        console.log(this._message);        
        this._messageView.update(this._message);
    }

    add(event){
        event.preventDefault();              
        
        let negotiation = this._createNegotiation();
        
        console.log(negotiation.date);     
        console.log(negotiation);

        console.log("Data formatada: " + DateHelper.dateToText(negotiation.date));

        this._negotiationsList.add(negotiation);
        this._message.text = 'Negociação adicionada com sucesso!';
        this._messageView.update(this._message);
        console.log(this._negotiationsList.negotiations);
        
        this._cleanForm(); //Limpa o formulário após adicionar uma negociação.
    }

    empty() {
        this._negotiationsList.clear();
        
        this._message.text = 'Negociações apagadas com sucesso!';
        this._messageView.update(this._message);
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