import { NegociacaoController } from "./controllers/NegociacaoController.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
const botaoImportar = document.querySelector('#botao-importa');

if(form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        controller.adiciona();
    })
} 
else {
    throw Error('Error when placing the order: check if form is not null.')
}

if(botaoImportar){
    botaoImportar.addEventListener('click', () => {
        controller.importaNegociacoesDaAPI();
    });
}
else {
    throw Error('"Import orders" button not found');
}