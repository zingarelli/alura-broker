var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DOMInjector } from "../decorators/DOMInjector.js";
import { InspecionaMetodo } from "../decorators/InspecionaMetodo.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";
import { diasDaSemana } from "../enums/diasDaSemana.js";
import { ListaNegociacoes } from "../models/ListaNegociacoes.js";
import { Negociacao } from "../models/Negociacao.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { NegociacoesService } from "../services/NegociacoesService.js";
import { imprimir } from "../utils/Imprimir.js";
export class NegociacaoController {
    constructor() {
        this._listaNegociacoes = new ListaNegociacoes();
        this._listaView = new NegociacoesView('#negociacoes-view');
        this._mensagemView = new MensagemView('#mensagemView');
        this._apiService = new NegociacoesService();
        this._listaView.update(this._listaNegociacoes);
    }
    adiciona() {
        const negociacao = this._criaNegociacao();
        if (!this._diaUtil(negociacao.data)) {
            this._mensagemView.update('Orders can only be placed during working days.');
            return;
        }
        this._listaNegociacoes.adiciona(negociacao);
        this._limpaForm();
        this._atualizaTela();
        imprimir(negociacao, this._listaNegociacoes);
    }
    _criaNegociacao() {
        const data = new Date(this._inputData.value.replace('-', ','));
        const simbolo = this._inputSimbolo.value;
        const qtde = parseInt(this._inputQtde.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(data, simbolo, qtde, valor);
    }
    _limpaForm() {
        this._inputData.value = '';
        this._inputQtde.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();
    }
    _atualizaTela() {
        this._mensagemView.update('Order added to the list.');
        this._listaView.update(this._listaNegociacoes);
    }
    _diaUtil(data) {
        return data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO;
    }
    importaNegociacoesDaAPI() {
        this._apiService.obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacao => {
                return !this._listaNegociacoes
                    .lista()
                    .some(item => item.ehIgual(negociacao));
            });
        })
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this._listaNegociacoes.adiciona(negociacao);
            }
            this._listaView.update(this._listaNegociacoes);
        });
    }
}
__decorate([
    DOMInjector('#data')
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    DOMInjector('#simbolo')
], NegociacaoController.prototype, "_inputSimbolo", void 0);
__decorate([
    DOMInjector('#quantidade')
], NegociacaoController.prototype, "_inputQtde", void 0);
__decorate([
    DOMInjector('#valor')
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    InspecionaMetodo,
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
//# sourceMappingURL=NegociacaoController.js.map