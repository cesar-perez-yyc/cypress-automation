import BasePage from './BasePage'

class OnlineBankingPage extends BasePage{
    onlineBankingPageIsVisible(){
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    }
}
export default OnlineBankingPage