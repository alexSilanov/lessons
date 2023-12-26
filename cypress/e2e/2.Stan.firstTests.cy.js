describe('DemoQA Menu-titles', ()=>{
    it.skip('Verification menu item names', function () {

        const expectedMenuItemsNames = [
            'Elements', 'Forms','Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'
        ]
        cy.visit('/');
        cy.get('.card').should('have.length', expectedMenuItemsNames.length).each(($el, idx)=> {
            expect($el.text()).to.be.equal(expectedMenuItemsNames[idx])
            //cy.wrap($el.text()).should('have.text', )
        });
    })


it('Verification menu item names', function () {

        const expectedMenuItemsNames = [
            'Elements', 'Forms','Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'
        ]
        cy.visit('/');
        cy.get('.card')
          .should('have.length', expectedMenuItemsNames.length)
          .then(($els)=> {
            return Cypress.$.makeArray($els).map($el=> $el.innerText)
          })
          .should('deep.equal', expectedMenuItemsNames)
    });

    it.only('From filling', function() {
        cy.visit('/')
        //cy.contains('.card', 'Forms').click() - Suche nach Text
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
          .should('have.text', '')
          .type('Stan{enter}')
          .should('have.value', 'Stan')
        //cy.get('#submit').click()
        cy.get('#firstName').should('have.css', 'border-color', 'rgb(40, 167, 69)')
    })
})