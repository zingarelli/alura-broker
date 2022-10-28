import { PrevineJSInjection } from "../decorators/PrevineJSInjection.js";
import { ListaNegociacoes } from "../models/ListaNegociacoes.js";
import { View } from "./View.js";

// cria os elementos HTML para popular a tela do usuário com as negociações existentes
export class NegociacoesView extends View<ListaNegociacoes> {

    // irá retornar o HTML para renderizar uma tabela com uma lista de negociações
    // as classes são para utilizar o bootstrap
    @PrevineJSInjection
    protected template(modelo: ListaNegociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${modelo.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this._dataFormatada(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                    // map retorna um array, então ao final fazemos
                    // um join para unir tudo em uma string só
                }).join('')}
            </tbody>
        </table>
        `;
    }

    // retorna a data para o formato padrão do navegador do usuário
    // no nosso caso (dd/mm/aaaa)
    private _dataFormatada (data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}