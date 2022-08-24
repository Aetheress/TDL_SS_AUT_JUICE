import BasePage from "./basePage";

class SelectAddressPage extends BasePage {
    static get addressSelection() {
        return cy.get(`#mat-radio-40`);
    }
    static get continue() {
        return cy.get(`[aria-label="Proceed to payment selection"]`);
    }
}

export default SelectAddressPage;