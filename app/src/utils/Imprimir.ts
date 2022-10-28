import { Imprimivel } from "../interfaces/Imprimivel.js";

// função que imprime informações dos objetos recebidos por parâmetro
export function imprimir(...objetos: Imprimivel[]){
    for(let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}