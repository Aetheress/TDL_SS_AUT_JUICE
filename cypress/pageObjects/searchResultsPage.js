import BasePage from "./basePage";

class SearchResultsPage extends BasePage {
    static juice(fruit) {
        return cy.get(`[alt^="${fruit} Juice"]`)
    }
    static get cards() {
        return cy.get(`img.mat-card-image`);
    }
    static get itemsAmount() {
        return cy.get(`[aria-label="Items per page:"]`);
    }
    //works if only one item
    static get addToBasket() {
        return cy.get(`[aria-label="Add to Basket"]`);
    }
}

export default SearchResultsPage;