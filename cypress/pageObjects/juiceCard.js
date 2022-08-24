class JuiceCard {
    static get card() {
        return cy.get(`app-product-details`);
    }
    static get closeCard() {
        return cy.get(`[aria-label="Close Dialog"]`);
    }
    static get reviewInput() {
        return cy.get(`[aria-label="Text field to review a product"]`);
    }
    static get submit() {
        return cy.get(`button#submitButton`);
    }
    static get reviewsDropdown() {
        return cy.get(`mat-expansion-panel-header[role="button"]`);
    }
    static get reviews() {
        return cy.get(`[role="region"]`);
    }
}

export default JuiceCard;