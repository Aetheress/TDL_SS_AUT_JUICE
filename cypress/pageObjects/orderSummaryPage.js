import BasePage from "./basePage";

class OrderSummaryPage extends BasePage {
    static get checkOut() {
        return cy.get(`#checkoutButton`);
    }
}

export default OrderSummaryPage;