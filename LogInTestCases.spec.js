///<reference types = "cypress"/>

describe('Log IN Page Testing', ()=>{


    // Test Case For Checking Visibility Of Main Title Logo
      it('Checking The Visibility of Main Title Logo', () => {

        cy.visit('/')
        cy.get('#divLogo').find('img').should('have.attr', 'src')

    })



    // LoG In Test Case for Valid Credentials
        it('Log In test',() => {

            cy.visit('/')
            cy.get('input[id="txtUsername"]').type("Admin")
            cy.get('input[id="txtPassword"]').type("admin123")
            cy.get('input[id = "btnLogin"]').click()
            cy.contains('Admin', {timeout: 1000})
            
        })
    

        // Test Case  For Displaying Error Message On Invalid Credentials
        it('Error Validation For Invalid Credentials', () => {

            cy.visit('/')
            cy.get('input[id = "txtUsername"]').type("----")
            cy.get('input[id = "txtPassword"]').type("----")
            cy.get('input[id = "btnLogin"]').click()
            cy.contains('Invalid credentials').should('be.visible')
    
    })

    
        // Test Case For Displaying Error Message On Invalid Username Only
        it('Error Validation for Invalid Username Only', () => {

            cy.visit('/')
            cy.get('input[id = "txtUsername"]').type("----")
            cy.get('input[id = "txtPassword"]').type("admin123")
            cy.get('input[id = "btnLogin"]').click()
            cy.contains('Invalid credentials').should('be.visible')

        })

        // Test Case For Displaying Error Message On Invalid Password Only
        it('Error Validation For Invalid Password Only', () => {
            
            cy.visit('/')
            cy.get('input[id = "txtUsername"]').type("Admin")
            cy.get('input[id = "txtPassword"]').type("----")
            cy.get('input[id = "btnLogin"]').click()
            cy.contains('Invalid credentials').should('be.visible')

        })
        
        // Testing The UI text UserName & Password Displayed At Login Page
        it('Testing The Visibility Of UserName & Password Text at UI', () => {
            cy.visit('/')
            cy.get('div[style = "position: relative; top: 210px; left: 655px; z-index:100;"]')
            cy.contains('( Username : Admin | Password : admin123 )').should('be.visible')

        })
        
        // Checking the functionality of Forgot Password Link At Login Page UI
        it('Testing The Functionality of Forgot Password Link', () => {
            cy.visit('/')
            cy.get('#forgotPasswordLink').contains('Forgot your password?')
        })

       })











