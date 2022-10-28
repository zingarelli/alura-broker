// classe que renderiza alguma informação na tela
export abstract class View<T> {
    // elemento HTML que irá renderizar a view
    protected elemento: HTMLElement;

    // busca no DOM o elemento que possui o seletor informado
    constructor(seletor: string) {
        // tratamento devido ao uso do strictNullChecks
        const elementoTemp = document.querySelector(seletor);

        if (elementoTemp) {
            this.elemento = document.querySelector(seletor) as HTMLElement;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
    }

    // irá retornar o HTML para renderizar a informação.
    // Esse método é abstrato, deve ser implementado pela classe filha
    protected abstract template(modelo: T): string;

    // atualiza o elemento com os dados novos recebidos
    update(texto: T): void {
        this.elemento.innerHTML = this.template(texto);
    }
}