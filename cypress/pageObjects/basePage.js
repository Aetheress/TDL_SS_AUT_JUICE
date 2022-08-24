class BasePage {
    static get url() {
        return "/";
    }
    static visit(options) {
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          uniqueText: this.uniqueText,
          expectedUrl: this.url,
          ...options,
        };
        return cy
          .visit(this.url)
          .then(() => this.assertIsCurrentPage(options))
      }
    
    static assertIsCurrentPage(
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          expectedUrl: this.url,
        }
      ) {
        return this.validatePath(options);
    }
    
    static validatePath(
        options = {
          timeout: Cypress.config("defaultCommandTimeout"),
          expectedUrl: this.url,
        }
      ) {
        return cy
          .location(options)
          .should((loc) =>
            expect(`${loc.pathname}${loc.search}`).to.eq(options.expectedUrl)
          );
    }

    static get account() {
      return cy.get(`#navbarAccount`);
    }

    static get dismissBanner() {
      return cy.get(`[aria-label="Close Welcome Banner"]`);
    }

    static get cookiesButton() {
      return cy.get(`[aria-label="dismiss cookie message"]`);
    }

    static get login() {
      return cy.get(`#navbarLoginButton`);
    }
    
    static get accountName() {
      return cy.get(`button[aria-label="Go to user profile"]`);
    }
}

export default BasePage;