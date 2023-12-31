describe('common methods', function() {

    it('verify link', function() {
        cy.visit('/')
       // cy.get('div.category-cards .card-body').find('h5').should('have.length', 6)
       // cy.title().should('eq', 'DEMOQA')
       // cy.get('div.avatar').should('have.css', 'color', 'rgb(1, 160, 224)')

        cy.get('div.card-body h5').contains('Elements').click()
        //cy.get('div.main-header').should('contain', 'Elements')
       // cy.get('div.main-header').should('be.visible')
        cy.get('#item-0').should('contain', 'Text Box').click()
        cy.get('input#userName')
            .should('have.attr', 'placeholder', 'Full Name')
            .type('Maria')
            .should('have.value', 'Maria').clear()
        cy.get('#item-1').contains('Check Box').click()
        cy.get('div#result').should('not.exist')
        cy.get('input#tree-node-home').check({force:true}).should('be.checked')
        cy.get('div#result').should('exist')
        cy.get('input#tree-node-home').uncheck({force:true})
    })

    it.only('method invoke', ()=> {
        cy.visit('https://openweathermap.org/')
        cy.contains('Marketplace').invoke('removeAttr', 'target').click()
    })
})