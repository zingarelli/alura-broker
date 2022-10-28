import { Modelo } from "../interfaces/Modelo.js";

// classe que cria uma negociação (está simulando uma ordem na Bolsa de Valores)
export class Negociacao implements Modelo<Negociacao>{
    /* declaração dos atributos e construtor no modo convencional */
    // // atributos privados
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // /* 
    //     atributos privados só podem receber valor por meio de um construtor ou métodos setter
    // */ 
    // constructor(data: Date, quantidade: number, valor:number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    /* declaração dos atributos e construtor usando TS */    
    // constructor( 
    //     private _data: Date,
    //     private _quantidade: number, 
    //     private _valor:number
    // ) {}

    /* declaração usando atributos public e readonly */
    constructor( 
        // continuará privada por ser de um tipo Date, que possui métodos setter próprios que podem modificar o atributo mesmo se fosse readonly
        private _data: Date,
        public readonly quantidade: number, 
        public readonly valor:number
    ) {}

    /*
        atributos privados só podem ser acessados por meio de getters
    */
    get data(): Date {
        // programação defensiva, iremos retornar uma cópia do atributo, assim ele não poderá ser modificado
        return new Date(this._data.getTime());
    }

    /* getters dos atributos não são mais necessários se eu declará-los como públic e readonly */
    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }

    // retorna o valor total da negociação
    get volume(): number {
        return this.quantidade * this.valor;
    }

    // retorna uma string com informações do objeto (é um toString())
    paraTexto(): string {
        return `
            Data: ${this._data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }

    // retorna se uma negociação é igual a outra recebida como parâmetro (é um equals())
    // a comparação será feita pela data da negociação
    ehIgual(negociação: Negociacao) {
        return this.data.getDate() === negociação.data.getDate() 
            && this.data.getMonth() === negociação.data.getMonth() 
            && this.data.getFullYear() === negociação.data.getFullYear();
    }
}