import { DOMInjector } from "../decorators/DOMInjector.js";
import { InspecionaMetodo } from "../decorators/InspecionaMetodo.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js"
import { diasDaSemana } from "../enums/diasDaSemana.js";
import { ListaNegociacoes } from "../models/ListaNegociacoes.js";
import { Negociacao } from "../models/Negociacao.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { NegociacoesService } from "../services/NegociacoesService.js";
import { imprimir } from "../utils/Imprimir.js";

// classe que irá controlar os dados que vieram do navegador e o que deve ser feito com eles
export class NegociacaoController {
    // utilizando decorators para já instanciar essas propriedades
    @DOMInjector('#data')
    private _inputData: HTMLInputElement;

    @DOMInjector('#simbolo')
    private _inputSimbolo: HTMLInputElement;

    @DOMInjector('#quantidade')
    private _inputQtde: HTMLInputElement;

    @DOMInjector('#valor')
    private _inputValor: HTMLInputElement;

    // quando dou um new, não é necessário tipar a variável, pois o TS vai entender que ela é do tipo 
    // com o qual a variável foi inicializada
    private _listaNegociacoes = new ListaNegociacoes();

    // elemento HTML que irá renderizar a lista de negociações
    private _listaView = new NegociacoesView('#negociacoes-view');

    // elemento HTML que irá renderizar uma mensagem
    private _mensagemView = new MensagemView('#mensagemView');

    // conexao com a API para obter dados de negociações salvos
    private _apiService = new NegociacoesService();

    // prepara os inputs para receber uma negociação e a tabela que irá exibir as negociações
    constructor() {
        // não é mais necessário instanciar os inputs, pois o decorator agora está fazendo isso.

        // renderiza a tabela que irá mostrar as negociações
        this._listaView.update(this._listaNegociacoes);
    }

    // adiciona uma negociação a uma lista com as negociações e mostra na tabela
    // utilizando decorators para testar a performance do método e dar informações sobre o método
    @InspecionaMetodo
    @logarTempoDeExecucao()
    adiciona(): void {
        const negociacao = this._criaNegociacao();

        if(!this._diaUtil(negociacao.data)){
            this._mensagemView.update('Orders can only be placed during working days.')
            return ; // early return            
        } 

        this._listaNegociacoes.adiciona(negociacao);
    
        // limpa o formulário para o usuário poder adicionar uma nova negociação
        this._limpaForm()

        // atualiza a tabela e mensagem ao usuário
        this._atualizaTela();

        imprimir(negociacao, this._listaNegociacoes);
    }

    // cria um objeto negociacao com os valores recebidos dos inputs 
    private _criaNegociacao(): Negociacao {
        /* 
            o tipo Date espera uma data no formato (aaaa, mm, dd) para ser montado corretamente,
            mas o input retorna uma string no formato (aaaa-mm-dd), então precisamos alterar o separador
        */
            const data = new Date(this._inputData.value.replace('-', ','));
            const simbolo = this._inputSimbolo.value;
            const qtde = parseInt(this._inputQtde.value);
            const valor = parseFloat(this._inputValor.value);
    
            return new Negociacao(data, simbolo, qtde, valor);
    }

    // limpa o formulário para os valores padrão (que estão no index.html) e seta o focus na data
    private _limpaForm(): void {
        this._inputData.value = '';
        this._inputQtde.value = '1';
        this._inputValor.value = '0.0';
        this._inputData.focus();

        // alternativa mencionada no fórum pelo Patrick Villela Ocaña Bruno e complementada pelo Fabio Sales
        // (document.querySelector('.form') as HTMLFormElement).reset();
    }

    // atualiza as views necessárias
    private _atualizaTela(): void {
        // informa sucesso no cadastro
        this._mensagemView.update('Order added to the list.');

        // atualiza a tabela com as negociações
        this._listaView.update(this._listaNegociacoes);
    }

    // retorna se a data cai em um dia útil 
    private _diaUtil(data: Date): boolean {
        // getDay retorna 6 para sábados e 0 para domingos
        return data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO;
    }

    // importa dados de negociação a partir de uma API
    importaNegociacoesDaAPI(){
        // os dados são importados por uma classe de serviço
        this._apiService.obterNegociacoesDoDia()
            // verifica se já não possuo os dados na lista (para não exibir novamente)
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacao => {
                    // retorno true se o item NÃO existir na lista
                    return !this._listaNegociacoes
                        .lista()
                        .some(item => item.ehIgual(negociacao));
                })
            })
            // adiciona os dados na lista de negociações
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this._listaNegociacoes.adiciona(negociacao);
                }
                // atualizo a tela para mostrar as negociações importads
                this._listaView.update(this._listaNegociacoes);
            });
    }
}