import { set} from '../fixtures/infos.json'

describe('DemoQA Menu-titles', ()=>{


    beforeEach(function(){
        cy.visit('/');
      /*  cy.fixture('infos').its('set').then((data) =>{
            set = data;
        }) */
    })



    set.forEach((obj)=>{
    it(`From filling for ${obj.firstName}`, function() {
        //cy.contains('.card', 'Forms').click() - Suche nach Text
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
          .should('have.text', '')
          .type(obj.firstName)
        //cy.get('#submit').click()
        cy.get('#userEmail')
          .should('have.text', '')
          .type(obj.userEmail)
    })
  })
})