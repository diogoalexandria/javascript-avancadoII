class DateHelper {

    constructor() {
        throw new Error("DateHelper can't be initialized.");
    }

    static dateToText(date) {
        
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }
    
    static textToDate(text) {

        if(!/\d{4}-\d{2}-\d{2}/.test(text)){
            throw Error('You should put in this format yyyy-mm-dd');
        }
        
        console.log("Dentro do metodo textToDate:");
        console.log(text);
        console.log(text.split('-'));
        return new Date(...text.split('-')); //Spread operator diz que cada elemento do array q está sendo criado com split a partir da string será equivalente a ordem da criação do objeto Date.
        
        //let dateParts = text.split('-')
        //return new Date(dateParts[0],dateParts[1],dateParts[2]);

        //return new Date(...text.split('-').map((item, indice) => item - indice % 2));
    }
}