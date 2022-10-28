// decorator que loga informações sobre um método: nome, parâmetros e retorno
// não recebe parâmetros, então já exporta diretamente a função de retorno
export function InspecionaMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: Array<any>){
        console.log(`--- Method ${propertyKey}`);
        console.log(`---- parameters: ${JSON.stringify(args)}`);

        const retorno = metodoOriginal.apply(this, args);

        console.log(`------ return: ${JSON.stringify(retorno)}`);

        return retorno;
    }

    return descriptor;
}