import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Account from "../../../fixtures/saucedemoLogin";

Given("Tôi truy cập vào màn hình login", () => {
  cy.visit("https://www.saucedemo.com/");
});

// Cách 1 với fixture file JSON
// When("Tôi login với tài khoản standard", () => {
//   cy.fixture("saucedemoLogin").then((account) => {
//     cy.get("#user-name").type(account.standard_user.user_name);
//     cy.get("#password").type(account.standard_user.password);
//     cy.get("#login-button").click();
//   });
// });

//Cách 2 với file JS
When("Tôi login với tài khoản standard", () => {
  cy.get("#user-name").type(Account.standard_user.user_name);
  cy.get("#password").type(Account.standard_user.password);
  cy.get("#login-button").click();
});

Then("Tôi kiểm tra Login thành công", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".inventory_list").should("be.visible");
});
