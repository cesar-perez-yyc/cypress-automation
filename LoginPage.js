import BasePage from './BasePage'

class LoginPage extends BasePage{
    loginPageIsVisible(){
        cy.url().should('include', 'login.html')
    }

    loginPageClickOnForgotPassword(){
        cy.get('.offset3 > a').click()
        cy.url().should('include', 'forgot-password.html')
    }

    loginPageClickOnSignInButton(){
        cy.get('#signin_button').click()
        cy.url().should('include', 'login.html')
    }

    loginPageEnterCredentials(usr, pwd){
        cy.get('#user_login').clear().type(usr)
        cy.get('#user_password').clear().type(pwd)
        cy.get('.btn').click()
    }

}
export default LoginPage