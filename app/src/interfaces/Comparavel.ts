// interface genérica que obriga a implementação de método que compara um objeto a outro
export interface Comparavel<T>{
    ehIgual(objeto: T): boolean;
}