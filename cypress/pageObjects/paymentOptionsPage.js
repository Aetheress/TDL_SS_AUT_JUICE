import BasePage from "./basePage";

class PaymentOptionsPage extends BasePage {
    static get paymentOptions() {
        return cy.get(`.mat-row.mat-row`);
    }
    static get continue() {
        return cy.get(`[aria-label="Proceed to review"]`);
    }
}

export default PaymentOptionsPage;