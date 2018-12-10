class Message {
    
    constructor(text = '') { //Se não for passado um parâmetro para o método construtor será passada automaticament um valor padrão definido na assinatura da função.
        this._text = text;
    }

    get text() {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }
}