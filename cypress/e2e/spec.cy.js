import BasePage from "../pageObjects/basePage";
import LoginPage from "../pageObjects/loginPage";
import RegisterPage from "../pageObjects/registerPage";
import SearchResultsPage from "../pageObjects/searchResultsPage";

describe('Juice shop testing', () => {
  context("Login & sign up test set", () => {
    beforeEach(()=> {
      BasePage.visit(); 
      BasePage.dismissBanner.click();
      BasePage.cookiesButton.click();
      BasePage.account.click();
      BasePage.login.click();
    });
    it("Scenario 1 - Login", () => {
      LoginPage.email.type("demo");
      LoginPage.password.type("demo");
      LoginPage.login.click();
      BasePage.account.click();
      BasePage.accountName.should("contain.text", "demo");
    });
    it("Scenario 2 - Registration", () => {
      LoginPage.register.click();
      let email = "email_" + Math.floor(Math.random()*10000) + "@ebox.com";
      RegisterPage.email.type(email);
      let password = "password";
      RegisterPage.password.type(password);
      RegisterPage.repeatPassword.type(password);
      RegisterPage.securityQuestion.click().get(`#mat-option-9`).click();
      RegisterPage.securityQuestion.should("have.text", "Name of your favorite pet?");
      RegisterPage.securityAnswer.type("Cipars");
      RegisterPage.register.click();
      LoginPage.email.type(email);
      LoginPage.password.type(password);
      LoginPage.login.click();
      BasePage.account.click()
      BasePage.accountName.should("contain.text", email);
    })
  })
  context("", () => {
    beforeEach(()=> {
      BasePage.visit(); 
      BasePage.dismissBanner.click();
      BasePage.cookiesButton.click();
    })
    it.only("Scenario - Search and Validate Lemon", ()=> {
      BasePage.searchButton.click();
      BasePage.searchBar.type(`Lemon{enter}`);
      SearchResultsPage.lemonJuice.click();
      SearchResultsPage.card.should("contain.text", "Sour but full of vitamins.")
    })
  })
})