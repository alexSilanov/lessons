//describe('', function() {
    beforeEach(()=> {
        cy.visit('https://demoqa.com/')
        cy.viewport(2000, 2000)
    })

    it('filling Form', function() {
        const expectedGenders = ['Male', 'Female', 'Other']


        cy.get('.card:nth-child(2').click()
        cy.get('.element-group:nth-child(2)>div').click()
        cy.get('#firstName').click().type('Alex')
        cy.get('#lastName').click().type('Silanov')
        cy.get('#userEmail').click().type('test@gmail.com')
        cy.get('[name="gender"]')
            .should('have.length', expectedGenders.length)
        cy.get('#gender-radio-1').click({force: true} )
        cy.get('#userNumber').type('1234')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('December')
        cy.get('.react-datepicker__year-select').select('1988')
        cy.get('[class$=day--001]').click()
        cy.get('#subjectsInput').type('Maths').type('{enter}')
        cy.get('#hobbies-checkbox-1').click({force: true})
        cy.get('#currentAddress').type('1212 River Way')
        cy.contains('Select State').click()
        cy.contains('NCR').click({force: true})
        cy.contains('Select City').click({force: true})
        cy.contains('Delhi').click({force: true})
        cy.get('#submit').click()
    })

//})

describe.only('second file', function() {

    beforeEach(()=> {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/webtables')
    })

    it('add new user', function() {
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').click().type('Alex')
        cy.get('#lastName').click().type('Peter')
        cy.get('#userEmail').type('adf@gmail.com')
        cy.get('#age').type('43')
        cy.get('#salary').type('3000')
        cy.get('#department').type('RedRover')
        cy.get('#submit').click()
        cy.get('#searchBox').type('Alex')
        cy.get('.rt-tbody div.rt-tr[role="row"]:not(.-padRow)').should('have.length', 1)
        cy.get('span[title="Delete"]').click()
        cy.get('rt-noData').should('have.text', 'No rows found')
    })
})