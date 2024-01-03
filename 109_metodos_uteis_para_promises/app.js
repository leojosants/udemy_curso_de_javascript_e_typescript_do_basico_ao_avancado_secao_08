// Promise.all
function example01() {
    /****************************************************************************************/
    function generateRandom(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
    }

    function waitSecond(message, time) {
        return new Promise((resolve, reject) => {
            if (typeof message !== 'string') {
                return reject(new Error('BAD VALUE'));
            }
            setTimeout(() => {
                resolve(message.toUpperCase() + ' -> passei na promise');
            }, time);
        });
    }

    /****************************************************************************************/
    const promises = [
        'Primeiro valor',
        waitSecond('Promise 1', 3000),
        waitSecond('Promise 2', 500),
        waitSecond('Promise 3', 1000),
        // waitSecond(1, 1000),
        'Ultimo valor',
    ];

    Promise.all(promises)
        .then(function (value) {
            console.log(value);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally('fim do programa');

    example01();
}

// Promise.race
function example02() {
    /****************************************************************************************/
    function generateRandom(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
    }

    function waitSecond(message, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof message !== 'string') {
                    return reject(new Error('BAD VALUE'));
                }
                resolve(message.toUpperCase() + ' -> passei na promise');
            }, time);
        });
    }

    /****************************************************************************************/
    const promises = [
        waitSecond('Promise 1', generateRandom(1, 5)),
        waitSecond('Promise 2', generateRandom(1, 5)),
        waitSecond('Promise 3', generateRandom(1, 5)),
        waitSecond(1, generateRandom(1, 5)),
    ];

    Promise.race(promises)
        .then(function (value) {
            console.log(value);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally('fim do programa');

    example02();
}

// Promise.resolve
function example03() {
    /****************************************************************************************/
    function generateRandom(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
    }

    function waitSecond(message, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof message !== 'string') {
                    return reject(new Error('BAD VALUE'));
                }
                resolve(message.toUpperCase() + ' -> passei na promise');
            }, time);
        });
    }

    function downloadPage() {
        // const cached = true;
        const cached = false;

        if (cached) {
            return Promise.resolve('Pagina em cache');
        }
        else {
            return waitSecond('Baixei a pagina', 3000);
        }
    }

    /****************************************************************************************/
    downloadPage()
        .then((pageData) => {
            console.log(pageData);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Fim do porgrama')
        });
        
    example03();
}

// Promise.reject
function example04() {
    /****************************************************************************************/
    function generateRandom(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
    }

    function waitSecond(message, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof message !== 'string') {
                    return reject(new Error('BAD VALUE'));
                }
                resolve(message.toUpperCase() + ' -> passei na promise');
            }, time);
        });
    }

    function downloadPage() {
        const cached = true;
        // const cached = false;

        if (cached) {
            return Promise.reject('Pagina em cache');
        }
        else {
            return waitSecond('Baixei a pagina', 3000);
        }
    }

    /****************************************************************************************/
    downloadPage()
        .then((pageData) => {
            console.log(pageData);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Fim do programa')
        });
}
example04();