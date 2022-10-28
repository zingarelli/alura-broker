import { View } from "./View.js";

// exibe uma mensagem na tela
export class MensagemView extends View<string>{

    // adiciona a mensagem ao seletor
    protected template(modelo: string): string {
        return `
            <p class="alert alert-info">${modelo}</p>
        `
    }
}