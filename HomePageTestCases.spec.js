///<reference types = "cypress"/>

describe('Home Page Testing', ()=>{

    // Home Page Logo Picture 
it.only('Testing The Logo Picture Banner At Home Page', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers')
    cy.get('input[id="txtUsername"]').type("Admin")
    cy.get('input[id="txtPassword"]').type("admin123")
    cy.get('input[id = "btnLogin"]').click()
    cy.contains('Admin', {timeout: 1000})
    cy.get('#branding').find('img').should('have.attr', 'src')

})






























































































})