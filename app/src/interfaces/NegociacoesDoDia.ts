// interface para tipar a resposta da API
export interface NegociacoesDoDia {
    // o nome das propriedades deve ser igual ao nome que a API retorna
    simbolo: string;
    valor: number;
    quantidade: number;
}