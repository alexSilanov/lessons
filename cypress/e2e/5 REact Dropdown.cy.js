describe('DemoQA Menu-titles', () => {
    let itemOfSearch = 'Item #18'


    xit('Filling out Practice Form: dropdown-state', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#state').click();
        cy.get('[id^=react-select-3-option]').then($els => {
            //Rajastan
            const item = Cypress.$.makeArray($els).filter($el => $el.innerText == "Rajasthan");
            return cy.wrap(item)
        })
            .click({ force: true })
    })

    it('Testing Virtual Scroll', function () {
        cy.visit('https://primereact.org/dropdown/');
        cy.get('.doc-main .py-4:nth-of-type(8) .p-dropdown').click()
        function searchForOption(item, level = 0) {
            if(level > 20) {
                throw new Error('Exceeded max recursion level')
            }
            cy.get('.doc-main .py-4:nth-of-type(8) .p-dropdown-label')
                .then(($el) => {
                    const activeOption = $el.text();
                    if (activeOption != itemOfSearch) {
                        cy.wrap($el).type('{downarrow}')
                        searchForOption(item, ++level)
                    }
                    cy.wrap($el).click()
                })
        }
        searchForOption(itemOfSearch)
        cy.get('.doc-main .py-4:nth-of-type(8) .p-dropdown-label').should('have.text', itemOfSearch)
    })


})



//setTimeout(()=> {debugger}, 3000) in console