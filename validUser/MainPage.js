import BasePage from '../BasePage'

class ClientPage extends BasePage{

    clickOnAccSummary(){
        //cy.get('#onlineBankingMenu').click()
    }

    clickOnAccActivity(){
        //cy.get('#feedback').click()
    }

    clickOnTransferFunds(){
        //cy.get('#signin_button').click()
    }

    clickOnPayBills(){
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
    }
}

export default ClientPage