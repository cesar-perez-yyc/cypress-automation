class TopNavBar{
    searchSomething(text){
        cy.get('#searchTerm').type(text)
    }
}

export default TopNavBar