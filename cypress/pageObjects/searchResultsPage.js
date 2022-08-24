import BasePage from "./basePage";

class SearchResultsPage extends BasePage {
    static get lemonJuice() {
        return cy.get(`[alt^="Lemon Juice"]`);
    }
    static get card() {
        return cy.get(`app-product-details`);
    }
}

export default SearchResultsPage;