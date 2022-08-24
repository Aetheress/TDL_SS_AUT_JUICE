import BasePage from "./basePage";

class SavedAddressesPage extends BasePage {
    static get addAddress() {
        return cy.get(`[aria-label="Add a new address"]`);
    }
    static get addresses() {
        return cy.get(`mat-card.mat-card`);
    }
}

export default SavedAddressesPage;