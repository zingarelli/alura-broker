// interface para que objetos implementem o método paraTexto()
export interface Imprimivel {
    // retorna uma string com informações do objeto (é um toString())
    paraTexto(): string;
}