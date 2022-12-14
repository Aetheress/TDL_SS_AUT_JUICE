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

    static get searchButton() {
      return cy.get(`.mat-search_icons>mat-icon:nth-child(2)`);
    }

    static get searchBar() {
      return cy.get(`.mat-form-field-type-mat-input`);
    }

    static get basket() {
      return cy.get(`[aria-label="Show the shopping cart"]`)
    }

    static get ordersAndPayment() {
      return cy.get(`button[aria-label="Show Orders and Payment Menu"]`);
    }
    
    static get savedAddresses() {
      return cy.get(`[aria-label="Go to saved address page"]`)
    }

    static get paymentOptions() {
      return cy.get(`[aria-label="Go to saved payment methods page"]`);
    }
}

export default BasePage;