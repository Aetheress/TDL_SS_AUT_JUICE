import BasePage from "./basePage";

class SearchResultsPage extends BasePage {
    static get lemonJuice() {
        return cy.get(`[alt^="Lemon Juice"]`);
    }

    static juice(fruit) {
        return cy.get(`[alt^="${fruit} Juice"]`)
    }

}

export default SearchResultsPage;