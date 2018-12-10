class MessageView extends View {    
    //O construtor ta sendo herdado da classe superior (View).
    template(message) {
        return message.text ? `<p class="alert alert-info">${message.text}</p>` : `<p></p>`;
    }   
}