class DateHelper {

    constructor() {
        throw new Error("DateHelper can't be initialized.");
    }

    static dateToText(date) {        
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    
    static textToDate(text) {

        if(!/\d{4}-\d{2}-\d{2}/.test(text)){
            throw Error('You should put in this format yyyy-mm-dd');
        }
        
        console.log("Dentro do metodo textToDate:");
        console.log(text);

        return new Date(...text.split('-').map((item, indice) => item - indice % 2));
        
        //return text.split('-')
        //.map((item, index) => {
        //    if(index == 1){
        //       return item - 1;
        //   }
        //    return item;
        //});

        //let dateParts = text.split('-')
        //return new Date(dateParts[0],dateParts[1],dateParts[2]);        
    }
}