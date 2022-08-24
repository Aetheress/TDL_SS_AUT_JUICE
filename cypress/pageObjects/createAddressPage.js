import BasePage from "./basePage";

class CreateAddressPage extends BasePage {
    static get country() {
        return cy.get(`[placeholder="Please provide a country."]`);
    }
    static get name() {
        return cy.get(`[placeholder="Please provide a name."]`)
    }
    static get mobileNumber() {
        return cy.get(`[placeholder="Please provide a mobile number."]`);
    }
    static get zip() {
        return cy.get(`[placeholder="Please provide a ZIP code."]`);
    }
    static get address() {
        return cy.get(`[placeholder="Please provide an address."]`);
    }
    static get city() {
        return cy.get(`[placeholder="Please provide a city."]`);
    }
    static get submit() {
        return cy.get(`#submitButton`);
    }
}

export default CreateAddressPage;;