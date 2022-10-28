var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PrevineJSInjection } from "../decorators/PrevineJSInjection.js";
import { View } from "./View.js";
export class NegociacoesView extends View {
    template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>PRICE PER STOCK</th>
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
        }).join('')}
            </tbody>
        </table>
        `;
    }
    _dataFormatada(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
__decorate([
    PrevineJSInjection
], NegociacoesView.prototype, "template", null);
//# sourceMappingURL=NegociacoesView.js.map