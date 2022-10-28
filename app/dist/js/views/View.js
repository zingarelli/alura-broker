export class View {
    constructor(seletor) {
        const elementoTemp = document.querySelector(seletor);
        if (elementoTemp) {
            this.elemento = document.querySelector(seletor);
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
    }
    update(texto) {
        this.elemento.innerHTML = this.template(texto);
    }
}
//# sourceMappingURL=View.js.map