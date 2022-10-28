export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            let tempoDeExecucao = t2 - t1;
            let unidade = 'milliseconds';
            if (emSegundos) {
                tempoDeExecucao /= 1000;
                unidade = 'seconds';
            }
            console.log(`Method ${propertyKey}: runtime = ${tempoDeExecucao} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logarTempoDeExecucao.js.map