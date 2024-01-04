// fetch()
function example01() {
    /**************************************************/
    fetch('people.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            loadElementsOnThePage(json);
        })

    /**************************************************/
    function createHtmlElements(tag) {
        return document.createElement(tag);
    }

    function loadElementsOnThePage(json) {
        const table = createHtmlElements('table');
        const result = document.querySelector('.result');

        for (let person of json) {
            const tr = createHtmlElements('tr');

            const tdName = createHtmlElements('td');
            tdName.innerHTML = `Nome: ${person.name}`;
            tr.appendChild(tdName);

            const tdAge = createHtmlElements('td');
            tdAge.innerHTML = `Idade: ${person.age}`;
            tr.appendChild(tdAge);

            const tdGender = createHtmlElements('td');
            tdGender.innerHTML = `Gênero: ${person.gender}`;
            tr.appendChild(tdGender);

            const tdCPF = createHtmlElements('td');
            tdCPF.innerHTML = `CPF: ${person.cpf}`;
            tr.appendChild(tdCPF);

            const tdEmail = createHtmlElements('td');
            tdEmail.innerHTML = `Email: ${person.email}`;
            tr.appendChild(tdEmail);

            const tdState = createHtmlElements('td');
            tdState.innerHTML = `Estado: ${person.state}`;
            tr.appendChild(tdState);

            const tdSalary = createHtmlElements('td');
            tdSalary.innerHTML = `Salário: R$${person.salary}`;
            tr.appendChild(tdSalary);

            const tdCompany = createHtmlElements('td');
            tdCompany.innerHTML = `Empresa: ${person.company}`;
            tr.appendChild(tdCompany);

            table.appendChild(tr);
        }

        result.appendChild(table);
    }
    example01();
}

// axios()
function example02() {
    /**************************************************/
    axios('people.json')
        .then((response) => {
            return loadElementsOnThePage(response.data);
        })

    /**************************************************/
    function createHtmlElements(tag) {
        return document.createElement(tag);
    }

    function loadElementsOnThePage(json) {
        const table = createHtmlElements('table');
        const result = document.querySelector('.result');

        for (let person of json) {
            const tr = createHtmlElements('tr');

            const tdName = createHtmlElements('td');
            tdName.innerHTML = `Nome: ${person.name}`;
            tr.appendChild(tdName);

            const tdAge = createHtmlElements('td');
            tdAge.innerHTML = `Idade: ${person.age}`;
            tr.appendChild(tdAge);

            const tdGender = createHtmlElements('td');
            tdGender.innerHTML = `Gênero: ${person.gender}`;
            tr.appendChild(tdGender);

            const tdCPF = createHtmlElements('td');
            tdCPF.innerHTML = `CPF: ${person.cpf}`;
            tr.appendChild(tdCPF);

            const tdEmail = createHtmlElements('td');
            tdEmail.innerHTML = `Email: ${person.email}`;
            tr.appendChild(tdEmail);

            const tdState = createHtmlElements('td');
            tdState.innerHTML = `Estado: ${person.state}`;
            tr.appendChild(tdState);

            const tdSalary = createHtmlElements('td');
            tdSalary.innerHTML = `Salário: R$${person.salary}`;
            tr.appendChild(tdSalary);

            const tdCompany = createHtmlElements('td');
            tdCompany.innerHTML = `Empresa: ${person.company}`;
            tr.appendChild(tdCompany);

            table.appendChild(tr);
        }

        result.appendChild(table);
    }
}
example02();