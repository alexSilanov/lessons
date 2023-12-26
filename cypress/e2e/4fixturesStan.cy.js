

describe('DemoQA Menu-titles', ()=>{

    beforeEach(function(){
        cy.visit('/');
        cy.fixture('formData').then((formData) =>{
            this.formData = formData;
        })
        cy.fixture('example').as('example')
    })




    xit('From filling', function() {
        //cy.contains('.card', 'Forms').click() - Suche nach Text
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
          .should('have.text', '')
          .type(`${this.formData.firstName}{enter}`)
        //cy.get('#submit').click()
        cy.get('#firstName').should('have.css', 'border-color', 'rgb(40, 167, 69)')
        cy.get('#userEmail')
          .should('have.text', '')
          .type(`${this.formData.userEmail}{enter}`)
    })

    it.only('From filling', function() {
        cy.get('@example').then((ex) => {
        //cy.contains('.card', 'Forms').click() - Suche nach Text
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
          .should('have.text', '')
          .type(ex.firstName)
        //cy.get('#submit').click()
        cy.get('#firstName').should('have.css', 'border-color', 'rgb(206, 212, 218)')
        cy.get('#userEmail')
          .should('have.text', '')
          .type(ex.email)
    })
})
})