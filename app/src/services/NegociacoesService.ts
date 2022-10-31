import { NegociacoesDoDia } from "../interfaces/NegociacoesDoDia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacoesService {
    // importa os dados da API e retorna um array de negociação
    obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            // converte a resposta para um Objeto JSON e o retorna
            .then(res => res.json())
            // o retorno da API é um array (neste projeto)
            // iremos converter os dados para um array de Negociacao
            // tipamos o retorno da API com uma interface
            .then((dados: NegociacoesDoDia[]) => {
                // vamos supor que a API retorna as negociações do dia corrente
                return dados.map(dadosDeHoje => {
                    // agora meu dado será do tipo Negociação
                    return new Negociacao(
                        new Date(),
                        dadosDeHoje.quantidade,
                        dadosDeHoje.valor
                    );
                });
            })
    }
}