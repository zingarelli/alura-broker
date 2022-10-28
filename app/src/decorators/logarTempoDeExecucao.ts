/** 
 * Decorator para contabilizar quanto tempo uma função demora a ser executada
 * @param emSegundos modo que o tempo será calculado; por padrão, retorna o tempo em milissegundos; retorna o tempo em segundos se for true
*/
export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        // retorna o prototype da classe em que o Decorator for incluído, 
        // ou o construtor da classe, no caso de ser incluído em um método estático
        target: any, 

        // nome do método que foi decorado
        propertyKey: string,

        // referência para o método original, onde será incluído o decorator
        descriptor: PropertyDescriptor
    ) {
        // guardo a referência ao método original
        const metodoOriginal = descriptor.value;

        // sobrescrevo o método, mantendo seus parâmetros e incluindo os comandos do decorator
        descriptor.value = function(...args: Array<any>){
            // inicio a execução do que o decorator faz
            const t1 = performance.now();
    
            // faço a execução do método original
            // usando o apply para utilizar o contexto original e os argumentos.
            const retorno = metodoOriginal.apply(this, args);
    
            // continuo a execução dos comandos do decorator
            const t2 = performance.now();

            let tempoDeExecucao = t2-t1;
            let unidade = 'milliseconds';
            if(emSegundos) {
                tempoDeExecucao /= 1000;
                unidade = 'seconds';
            }

            console.log(`Method ${propertyKey}: runtime = ${tempoDeExecucao} ${unidade}`);
            
            // retorno o que o método original retornaria ao ser invocado, caso tenha algum retorno
            return retorno;
        }

        // devolvo o método sobrescrito com os comandos do decorator
        return descriptor;
    }    
}