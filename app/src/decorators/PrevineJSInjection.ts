// remove da string qualquer valor que tenha '<script>'
export function PrevineJSInjection(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // neste caso, irei modificar o retorno, então não pode ser const
        let retorno = metodoOriginal.apply(this, args);

        if(typeof(retorno) === 'string'){
            //console.log(`@PrevineJSInjection em ação na classe ${this.constructor.name}, método ${propertyKey}`);
            
            // remoção de texto que contenha '<script>'
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        return retorno;
    }

    return descriptor;
}