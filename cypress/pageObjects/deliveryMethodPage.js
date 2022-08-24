import BasePage from "./basePage";

class DeliveryMethodPage extends BasePage {
    static get standardDelivery() {
        return cy.get(`#mat-radio-43`);
    }
    static get continue() {
        return cy.get(`[aria-label="Proceed to delivery method selection"]`);
    }
}

export default DeliveryMethodPage;