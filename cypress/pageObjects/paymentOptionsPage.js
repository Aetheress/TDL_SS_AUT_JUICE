import BasePage from "./basePage";

class PaymentOptionsPage extends BasePage {
    static get card() {
        return cy.get(`#mat-radio-44`);
    }
    static get continue() {
        return cy.get(`[aria-label="Proceed to review"]`);
    }
}

export default PaymentOptionsPage;