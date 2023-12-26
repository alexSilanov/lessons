describe('methods', function() {


    beforeEach(function() {
        cy.visit('https://openweathermap.org/')
    })
    it('methods', function() {
        cy.get('.search-container > input').type('New York', {force:true})
        cy.get('button[type="submit"]').click({force:true})
        cy.get('ul.search-dropdown-menu li').each(($el, index) => {
            let text = $el.text()
            if(text.includes('New York City, US')) {
                cy.wrap($el).click()
            }
        })

    })
})