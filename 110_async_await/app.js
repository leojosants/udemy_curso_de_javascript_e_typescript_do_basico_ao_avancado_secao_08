/****************************************************************************************/
function generateRandom(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitSecond(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== 'string') {
                return reject('Caí no erro');
            }
            resolve(message.toUpperCase() + ' -> passei na promise');
            return;
        }, time);
    });
}

/****************************************************************************************/
// waitSecond('Fase 1', generateRandom())
//     .then((value) => {
//         console.log(value);
//         return waitSecond('Fase 2', generateRandom())
//     })
//     .then((value) => {
//         console.log(value);
//         return waitSecond('Fase 3', generateRandom())
//     })
//     .then((value) => {
//         console.log(value);
//         return value;
//     })
//     .then((value) => {
//         console.log(`Terminamos na fase: ${value}`);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Fim do programa');
//     });

async function execute() {
    try {
        const phase_1 = await waitSecond('Fase 1', generateRandom());
        console.log(phase_1);

        const phase_2 = await waitSecond('Fase 2', generateRandom());
        // const phase_2 = await waitSecond(2, generateRandom());
        console.log(phase_2);

        const phase_3 = await waitSecond('Fase 3', generateRandom());
        console.log(`Terminamos na fase: ${phase_3}`);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('Fim do programa');
    }
}
execute();