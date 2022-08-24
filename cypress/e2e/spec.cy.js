import BasePage from "../pageObjects/basePage";
import LoginPage from "../pageObjects/loginPage";

describe('Juice shop testing', () => {
  context("Login test", () => {
    beforeEach(()=> {
      BasePage.visit(); 
      BasePage.dismissBanner.click();
      BasePage.cookiesButton.click();
    });
    it("Login test case", () => {
      BasePage.account.click();
      BasePage.login.click();
      LoginPage.email.type("demo");
      LoginPage.password.type("demo");
      LoginPage.login.click();
      BasePage.account.click();
      BasePage.accountName.should("contain.text", "demo");
    })
  })
})