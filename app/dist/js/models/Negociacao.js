export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    paraTexto() {
        return `
            Data: ${this._data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }
    ehIgual(negociação) {
        return this.data.getDate() === negociação.data.getDate()
            && this.data.getMonth() === negociação.data.getMonth()
            && this.data.getFullYear() === negociação.data.getFullYear();
    }
}
//# sourceMappingURL=Negociacao.js.map