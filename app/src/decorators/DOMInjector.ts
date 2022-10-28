/**
 * Decorator para propriedade, busca um elemento no DOM e retorna esse elemento
 * para a propriedade
 * @param seletor seletor de um elemento do HTML
 */
export function DOMInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        let elemento: HTMLElement;
        
        // cria um getter para definir o que a propriedade irá retornar quando ela for acessada
        const getter = function() {
            // esse if evita procurar pelo elemento toda vez que a propriedade for acessada
            if(!elemento){ // elemento ainda não foi procurado no DOM
                elemento = document.querySelector(seletor) as HTMLElement;
                console.log(`DOM element injected to the property ${propertyKey}`);
            }
            return elemento;
        }

        // adiciona esse getter à propriedade da classe, quando ela for instanciada
        // com isso, a propriedade irá possuir um método get que retorna o que foi 
        // definido na função getter acima
        Object.defineProperty(target, propertyKey, {get: getter})
    }
}