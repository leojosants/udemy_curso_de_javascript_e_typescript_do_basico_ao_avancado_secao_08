/**************************************************/
const loadResult = (response) => {
    const result = document.querySelector('.result');
    result.innerHTML = response;
};

async function loadPage(element) {
    try {
        const href = element.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) {
            throw new Error('ERRO 404');
        }

        const html = await response.text();
        loadResult(html);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.warn('Fim do programa');
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