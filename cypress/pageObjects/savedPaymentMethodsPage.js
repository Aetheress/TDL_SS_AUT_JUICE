import BasePage from "./basePage";

class SavedPaymentMethodsPage extends BasePage {
    static get addCard() {
        return cy.get(`#mat-expansion-panel-header-0`);
    }
    static get name() {
        return cy.get(`#mat-input-3`);
    }
    static get cardNumber() {
        return cy.get(`#mat-input-4`);
    }
    static get expiryMonth() {
        return cy.get(`#mat-input-5`);
    }
    static get expiryYear() {
        return cy.get(`#mat-input-6`);
    }
    static get submit() {
        return cy.get(`#submitButton`);
    }
    static get methods() {
        return cy.get(`mat-card.mat-card`);
    }
}

export default SavedPaymentMethodsPage;