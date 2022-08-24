import BasePage from "./basePage";

class BasketPage extends BasePage {
    static get checkOut() {
        return cy.get(`#checkoutButton`);
    }
}

export default BasketPage;