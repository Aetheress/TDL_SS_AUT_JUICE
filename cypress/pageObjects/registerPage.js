import BasePage from "./basePage";

class RegisterPage extends BasePage {
    static get email() {
        return cy.get(`#emailControl`);
    }
    static get password() {
        return cy.get(`#passwordControl`);
    }
    static get repeatPassword() {
        return cy.get(`#repeatPasswordControl`);
    }
    static get securityQuestion() {
        return cy.get(`mat-select[role="combobox"]`);
    }
    static get favoritePet() {
        return cy.get(`#mat-option-9`);
    }
    static get securityAnswer() {
        return cy.get(`#securityAnswerControl`);
    }
    static get register() {
        return cy.get(`#registerButton`);
    }
}

export default RegisterPage;