describe('iFrame', function() {
    it('test1', function() {
       cy.visit('https://play1.automationcamp.ir/frames.html');
       cy.get('#frame1')
         .its('0.contentDocument')
         .its('body')
         .find('#click_me_1').should('contain', 'Click Me 1').click()
         .should('contain', 'Clicked')
    })

    it.only('', function() {
        cy.visit('https://play1.automationcamp.ir/frames.html');
        cy.get('#frame2')
          .its('0.contentDocument')
          .its('body')
          .find('#click_me_2')
          .should('contain', 'Click Me 2').click()
          .should('contain', 'Clicked')
    })

})