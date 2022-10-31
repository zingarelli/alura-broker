import { Negociacao } from "../models/Negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dadosDeHoje => {
                return new Negociacao(new Date(), dadosDeHoje.simbolo, dadosDeHoje.quantidade, dadosDeHoje.valor);
            });
        });
    }
}
//# sourceMappingURL=NegociacoesService.js.map