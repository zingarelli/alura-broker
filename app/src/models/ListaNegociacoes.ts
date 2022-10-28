/** 
 * Classe que representa uma lista de negociações. 
 * Como as negociações, uma vez criadas, não podem ser removidas, não podemos utilizar um array
 * clássido do JS para lidar com as negociações. Por isso, foi criada esta classe, que possibilitará
 * somente que negociações sejam adicionadas ou exibidas, e não removidas.
 * */
import { Modelo } from "../interfaces/Modelo.js";
import { Negociacao } from "./Negociacao.js";

// como Negociações não faz nenhuma customização ao ser criada, o constructor é opcional (neste caso, por padrão, será utilizado um constructor vazio quando você fizer um new Negociacoes())
export class ListaNegociacoes implements Modelo<ListaNegociacoes> {
    // a lista será privada para que ninguém de fora tenha controle sobre ela
    private _listaNegociacoes: Array<Negociacao> = [];
    // outra maneira de declarar (syntax sugar)
    // private _listaNegociacoes: Negociacao[] = [];
    
    // adiciona nova negociação à lista
    adiciona(negociacao: Negociacao) {
        this._listaNegociacoes.push(negociacao);
    }

    /* OPÇÃO 1 (clássica JS): return com spread operator */
    // lista(): Array<Negociacao> {        
    //     // o spread operator dentro de [] está criando uma nova lista com os itens de _listaNegociacoes
    //     // dessa maneira, prevenimos que ninguém conseguirá alterar a _listaNegociacoes, pois estamos
    //     // retornando pelo método um novo array com uma cópia dos itens de _listaNegociacoes
    //     return [...this._listaNegociacoes];
    // }

    /* OPÇÃO 2 (proporcionada pelo TS): uso do ReadonlyArray*/
    lista(): ReadonlyArray<Negociacao> {
        // o ReadonlyArray já previne que o array não possa ser modificado (o próprio compilador irá informar erro)
        // lista imutável 
        return this._listaNegociacoes;
    }
    //outra maneira de declarar a função (syntax sugar)
    // lista(): readonly Negociacao[] {...}

    // retorna uma string com informações do objeto (é um toString())
    paraTexto(): string {
        return JSON.stringify(this._listaNegociacoes, null, 2);
    }

    //// retorna se uma lista é igual a outra recebida como parâmetro (é um equals())
    ehIgual(lista: ListaNegociacoes) {
        return JSON.stringify(this._listaNegociacoes) === JSON.stringify(lista.lista());
    }
}