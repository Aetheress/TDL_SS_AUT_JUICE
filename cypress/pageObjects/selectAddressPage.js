import BasePage from "./basePage";

class SelectAddressPage extends BasePage {
    static get addresses() {
        return cy.get(`mat-row.mat-row`);
    }
    static get continue() {
        return cy.get(`[aria-label="Proceed to payment selection"]`);
    }
}

export default SelectAddressPage;