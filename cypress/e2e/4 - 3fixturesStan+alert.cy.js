
describe('DemoQA Menu-titles', () => {


  beforeEach(function () {
    cy.visit('/alerts');
    /*  cy.fixture('infos').its('set').then((data) =>{
          set = data;
      }) */
  })

  it('', function () {
    cy.get('#alertButton').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('You clicked a button')
    })
  })
  //Confirm Alert
  it('verification of the confirm window', () => {
    cy.get('#confirmButton').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Do you confirm action?');
    })
    cy.get('#confirmResult').should('contain', 'Ok').and('contain', 'You selected ')
  })
  //Cancel alert
  it('verification of the confirm window - click Cancel', () => {
    cy.get('#confirmButton').click()
    cy.on('window:confirm', (str) => false)
    cy.get('#confirmResult').should('contain', 'Ok').and('contain', 'You selected ')
  })
  //Prompt Fenster
  it.only('verification of the prompt', () => {
    cy.window().then((inputData) => {
      cy.get('#promtButton').click();
      cy.stub(inputData, 'prompt').returns('JavaScript')
      cy.get('#promptResult').should('contain', 'JavaScript')
    })


  })
})