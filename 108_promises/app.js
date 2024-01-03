/****************************************************************************************/
function generateRandom(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitSecond(message, time) {
    return new Promise((resolve, reject) => {
        if (typeof message !== 'string') reject(new Error('BAD VALUE'));
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

/****************************************************************************************/
// resolve  --> then
// reject   --> catch
waitSecond('Conectando ao BD', generateRandom(1, 3))
    .then((response) => {
        console.log('-> inicio da execucao');
        console.log(response);
        return waitSecond('Buscando dados do BD', generateRandom(1, 3));
    })
    .then((response) => {
        console.log(response);
        // return waitSecond('Tratando dados do BD', generateRandom(1, 3));
        return waitSecond(1, generateRandom(1, 3));
    })
    .then((response) => {
        console.log(response);
        return waitSecond('Exibindo dados do BD', generateRandom(1, 3));
    })

    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.log('-->', e);
    })
    .finally(() => {
        console.log('Desconectando ao BD')
        console.log('-> fim da execucao');
    });

console.log('\nlinha de codigo apos as promises\n');