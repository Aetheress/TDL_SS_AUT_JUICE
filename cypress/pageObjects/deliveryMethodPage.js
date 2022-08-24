import BasePage from "./basePage";

class DeliveryMethodPage extends BasePage {
    static get deliveryMethods() {
        return cy.get(`mat-row.mat-row`);
    }
    static get continue() {
        return cy.get(`[aria-label="Proceed to delivery method selection"]`);
    }
}

export default DeliveryMethodPage;