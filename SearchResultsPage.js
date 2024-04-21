import BasePage from './BasePage'

class SearchResultsPage extends BasePage{
    searchResultsPageIsVisible(){
        cy.get('h2').contains('Search Results:')
    }
}
export default SearchResultsPage