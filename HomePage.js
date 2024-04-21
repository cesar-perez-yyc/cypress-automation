import BasePage from './BasePage'
import {baseURL} from '../fixtures/ZeroBankURL'

class HomePage extends BasePage{
    visit(){
        //cy.visit('http://zero.webappsecurity.com/index.html')
        cy.visit(baseURL)
        cy.url().should('include', 'index.html')
    } 

    carouselIsVisible(){
        cy.get('#carousel').should('be.visible')
    }

    clickOnHome(){
        cy.get('#homeMenu').click()
    }

    clickOnOnlineBanking(){
        cy.get('#onlineBankingMenu').click()
    }

    clickOnFeedback(){
        cy.get('#feedback').click()
    }

    clickOnLogin(){
        cy.get('#signin_button').click()
    }

}
export default HomePage