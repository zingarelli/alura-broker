export class ListaNegociacoes {
    constructor() {
        this._listaNegociacoes = [];
    }
    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
    }
    lista() {
        return this._listaNegociacoes;
    }
    paraTexto() {
        return JSON.stringify(this._listaNegociacoes, null, 2);
    }
    ehIgual(lista) {
        return JSON.stringify(this._listaNegociacoes) === JSON.stringify(lista.lista());
    }
}
//# sourceMappingURL=ListaNegociacoes.js.map