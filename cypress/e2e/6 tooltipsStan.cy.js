describe('', function() {
 it('', function() {
    cy.visit('https://demoqa.com/tool-tips');
    cy.get('#toolTipButton').trigger('focus')
    cy.get('#buttonToolTip').should('be.visible')
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button')
 })

 xit('', function() {
    cy.visit('https://www.hirebird.io/post/qa-softwaretester-w-m-d-berlin')
    cy.get('nav.blog-header__navigation #categories-more-button').click()
    cy.get('.ucwOAz').should('have.length', 11)
    cy.get('.ucwOAz button.blog-navigation-container-font').each(($el) => {
        if($el.text === "QA") {
            cy.wrap($el).click()
        }
    })
 })
})