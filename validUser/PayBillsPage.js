import BasePage from '../BasePage'

class PayBillsPage extends BasePage{
    // PAY SAVED PAYEE TAB
    ClickOn_PayBills_Pay(){
        cy.contains('Pay Saved Payee').click()
    }

    // ADD NEW PAYEE TAB
    ClickOn_PayBills_Add(){
        cy.contains('Add New Payee').click()
        cy.contains('Who are you paying?')
    }

    PayBills_Add_FillOutForm(name, address, account, details){
        cy.get('#np_new_payee_name').clear().type(name)
        cy.get('#np_new_payee_address').clear().type(address)
        cy.get('#np_new_payee_account').clear().type(account)
        cy.get('#np_new_payee_details').clear().type(details)
    }

    PayBills_Add_SubmitPayee(){
        cy.get('#add_new_payee').click()
    }

    feedbackFormSubmit(){
        cy.get('.btn-signin').click()
        cy.get('.offset3').contains('Thank you for your comments,')
    }

    // PAY BILLS TAB
    ClickOn_PayBills_Purchase(){
        cy.contains('Purchase Foreign Currency').click()
    }



}
export default PayBillsPage