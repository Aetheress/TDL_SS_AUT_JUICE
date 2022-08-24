import BasePage from "./basePage";

class LoginPage extends BasePage {
    static get email() {
        return cy.get(`#email`);
    }
    static get password() {
        return cy.get(`#password`);
    }
    static get login() {
        return cy.get(`button#loginButton`);
    }
}

export default LoginPage;