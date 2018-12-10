class NegotiationsView {

    constructor(){
        this._element = element;
    }

    _template(model) {
        return //Template String
           `<table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.negotiations.map((n) =>{
                        console.log(n);
                        return n;
                    })}
                </tbody>

                <tfoot>
                </tfoot>
            </table>`;
    }

    update(model) {
        this._element.innerHTML = this._template(model);
    }
}

