import BasePage from "./basePage";

class OrderCompletionPage extends BasePage {
    static get message() {
        return cy.get(`h1.confirmation`);
    }
}

export default OrderCompletionPage;