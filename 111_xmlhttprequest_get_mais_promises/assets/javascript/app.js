function example01() {
    /**************************************************/
    const resquest = (object) => {
        const xhr = new XMLHttpRequest();
        xhr.open(object.method, object.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                object.success(xhr.responseText);
            }
            else {
                object.error(xhr.statusText);
            }
        });
    };

    const loadResult = (response) => {
        const result = document.querySelector('.result');
        result.innerHTML = response;
    };

    const loadPage = (element) => {
        const href = element.getAttribute('href');

        objectConfig = {
            method: 'GET',
            url: href,
            success(response) {
                loadResult(response);
            },
            error(errorText) {
                console.log(errorText);
            },
        };

        resquest(objectConfig);
    };

    /**************************************************/
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const element = event.target;
        const tag = element.tagName.toLowerCase();

        if (tag === 'a') {
            loadPage(element);
        }
    });
    example01();
}

function example02() {
    /**************************************************/
    const resquest = (object) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(object.method, object.url, true);
            xhr.send();

            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(xhr.statusText);
                }
            });
        });
    };

    const loadResult = (response) => {
        const result = document.querySelector('.result');
        result.innerHTML = response;
    };

    const loadPage = (element) => {
        const href = element.getAttribute('href');

        configObject = {
            method: 'GET',
            url: href,
        };

        resquest(configObject)
            .then((response) => {
                loadResult(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('Fim do programa');
            })
    }

    /**************************************************/
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const element = event.target;
        const tag = element.tagName.toLowerCase();

        if (tag === 'a') {
            loadPage(element);
        }
    });

    example02();
}

function example03() {
    /**************************************************/
    const resquest = (object) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(object.method, object.url, true);
            xhr.send();

            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(xhr.statusText);
                }
            });
        });
    };

    const loadResult = (response) => {
        const result = document.querySelector('.result');
        result.innerHTML = response;
    };

    const loadPage = async (element) => {
        const href = element.getAttribute('href');

        configurationObject = {
            method: 'GET',
            url: href,
        };

        try {
            const response = await resquest(configurationObject);
            loadResult(response);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            console.log('Fim do programa');
        }
    }

    /**************************************************/
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const element = event.target;
        const tag = element.tagName.toLowerCase();

        if (tag === 'a') {
            loadPage(element);
        }
    });
}
example03();