describe('testing tables', function () {

    let keysArr = [];
    let tableArrActual = [];
    let tableArr = [];


    it('Sort a table alphabetical', function () {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:first-child').then(($els) => {
            let actualStates = Cypress.$.makeArray($els).map(($el) => $el.innerText)
            let expectedStates = actualStates.slice().sort()
            //expect(actualStates).to.deep.equal(expectedStates);
            //expect(actualStates).to.include.members(expectedStates)
            expect(actualStates).to.have.ordered.members(expectedStates)
        })
    })


    // Summa vseh
    it('Sort a table alphabetical', function () {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:last-child').then(($els) => {
            let arr = Cypress.$.makeArray($els).map(($el) => $el.innerText)
            let sum = arr
                .map((el) => +el.replace(/\D/g, ''))
                .reduce((sum, el) => sum + el, 0);
            console.log(sum)
        })
    })

    it.only('sort a table by keys', () => {
        cy.visit('https://demoqa.com/webtables');
       cy.getTable().then(arr => {
        cy.get('div.rt-th:first-child').click();
        cy.getTable().then(actualArr => {
            let expArr = arr.sort((a, b) => a['First Name'].localeCompare(b['First Name']));
            expect(actualArr).to.deep.equal(expArr)
        })
       })
    })
       /* cy.get('div.rt-th:first-child').click();
        cy.get('div.rt-table').within(() => {
            cy.get('div.rt-th').then(($els) => {
                keysArr = Cypress.$.makeArray($els).map(($el) => $el.innerText);
                //console.log(keysArr)
            });
            cy.get('div.rt-tr-group').each((_, row) => {
                cy.get('div.rt-tr-group').eq(row)
                  // .get('div.rt-tr')
                  // .not('.-padRow')
                  .find('div.rt-td').then(($els) => {
                    let dataArr = Cypress.$.makeArray($els).map(($el) => $el.innerText);
                    let tempObj = dataArr.reduce((obj, el, idx) => {
                        return {...obj, [keysArr[idx]]: el}
                    }, {});
                    if(tempObj['First Name'].trim() != "") {
                        tableArrActual.push(tempObj)
                    }
                })
            })
            expect(tableArrActual).to.deep.equal(tableArr.sort((a, b) => a['First Name'].localeCompare(b['First Name'])))
    })
    cy.wrap()
})
})*/})