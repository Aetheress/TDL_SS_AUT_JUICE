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
    static get itemsAmountOptions() {
        return cy.get(`span.mat-option-text`);
    }
    //works if only one item
    static get addToBasket() {
        return cy.get(`[aria-label="Add to Basket"]`);
    }
}

export default SearchResultsPage;