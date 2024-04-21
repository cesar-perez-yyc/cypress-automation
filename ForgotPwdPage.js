import BasePage from './BasePage'

class ForgotPwdPage extends BasePage{
    forgotPwdPageFormFillOut(mail){
        cy.get('#user_email').type(mail)
    }

    forgotPwdPageFormSubmit(){
        cy.contains('Send Password').click()
        cy.get('.page-header').contains('Forgotten Password')
    }
}
export default ForgotPwdPage