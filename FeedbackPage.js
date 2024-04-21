import BasePage from './BasePage'

class FeedbackPage extends BasePage{
    feedbackFormIsVisible(){
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
        cy.get('form').should('be.visible')
    }

    feedbackFormFillOut(Name, mail, subject, comment){
        cy.get('#name').clear().type(Name)
        cy.get('#email').clear().type(mail)
        cy.get('#subject').clear().type(subject)
        cy.get('#comment').clear().type(comment)
    }

    feedbackFormSubmit(){
        cy.get('.btn-signin').click()
        cy.get('.offset3').contains('Thank you for your comments,')
    }

}
export default FeedbackPage