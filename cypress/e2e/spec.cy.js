import BasePage from "../pageObjects/basePage";
import LoginPage from "../pageObjects/loginPage";
import RegisterPage from "../pageObjects/registerPage";
import SearchResultsPage from "../pageObjects/searchResultsPage";
import JuiceCard from "../pageObjects/juiceCard";
import BasketPage from "../pageObjects/basketPage";
import SelectAddressPage from "../pageObjects/selectAddressPage";
import DeliveryMethodPage from "../pageObjects/deliveryMethodPage";
import PaymentOptionsPage from "../pageObjects/paymentOptionsPage";
import OrderSummaryPage from "../pageObjects/orderSummaryPage";
import OrderCompletionPage from "../pageObjects/orderCompletionPage";

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
      BasePage.account.click();
      BasePage.login.click();
      LoginPage.email.type("demo");
      LoginPage.password.type("demo");
      LoginPage.login.click();
    })
    it("Scenario 3 - Search and Validate Lemon", ()=> {
      BasePage.searchButton.click();
      BasePage.searchBar.type(`Lemon{enter}`);
      SearchResultsPage.juice("Lemon").click();
      JuiceCard.card.should("contain.text", "Sour but full of vitamins.")
    })
    it("Scenario 4 - Search 500ml and validate Lemon, while having multiple cards", () => {
      BasePage.searchButton.click();
      BasePage.searchBar.type(`500ml{enter}`)
      SearchResultsPage.juice("Lemon").click();
      JuiceCard.card.should("contain.text", "Sour but full of vitamins.")
    })
    it("Scenario 5 - Search 500ml and validate cards", () => {
      BasePage.searchButton.click();
      BasePage.searchBar.type('500ml{enter}');
      SearchResultsPage.juice("Eggfruit").click();
      JuiceCard.card.should("contain.text", "Now with even more exotic flavour.")
      JuiceCard.closeCard.click();
      SearchResultsPage.juice("Lemon").click();
      JuiceCard.card.should("contain.text", "Sour but full of vitamins.")
      JuiceCard.closeCard.click();
      SearchResultsPage.juice("Strawberry").click();
      JuiceCard.card.should("contain.text", "Sweet & tasty!")
    })
    it("Scenario 6 - Add a review", () => {
      BasePage.searchButton.click();
      BasePage.searchBar.type('Raspberry{enter}');
      SearchResultsPage.juice("Raspberry").click();
      JuiceCard.reviewInput.click();
      let review = "Tastes like metal";
      JuiceCard.reviewInput.type(review)
      JuiceCard.submit.click();
      JuiceCard.reviewsDropdown.click();
      JuiceCard.reviews.should("contain.text", review);
    })
    it("Scenario 7 - Validate product card amount", () => {
      SearchResultsPage.cards.should("have.length", 12);
      SearchResultsPage.itemsAmount.click().get(`#mat-option-4`).click();
      SearchResultsPage.cards.should("have.length", 24);
    })
    it("Scenario 8 - Buy Girlie T-shirt", () => {
        BasePage.searchButton.click();
        BasePage.searchBar.type('Girlie{enter}');
        SearchResultsPage.addToBasket.click();
        BasePage.basket.click();
        BasketPage.checkOut.click();
        SelectAddressPage.addressSelection.click();
        SelectAddressPage.continue.click();
        DeliveryMethodPage.standardDelivery.click();
        DeliveryMethodPage.continue.click();
        PaymentOptionsPage.card.click();
        PaymentOptionsPage.continue.click();
        OrderSummaryPage.checkOut.click();
        OrderCompletionPage.message.should("have.text", "Thank you for your purchase!");
    })
  })
})