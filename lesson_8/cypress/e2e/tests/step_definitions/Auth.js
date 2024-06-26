import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Truy cập vào màn hình login Auth", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("Tôi login với tài khoản được lưu ở cookies", () => {
  cy.setCookie("session-username", "standard_user");
  cy.setCookie("session-pass", "secret_sauce");
});

Then("Tôi đăng nhập thành công", () => {
  cy.wait(1000);
  cy.clearCookie("session-username");
});
