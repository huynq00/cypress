import LoginUI from "../e2e/pages/loginUI";

const loginUI = new LoginUI();

Cypress.Commands.add("Login", function () {
  cy.visit(loginUI.getUrl);

  cy.inputText(loginUI.getInputUsername, "standard_user");
  cy.inputText(loginUI.getInputPassword, "secret_sauce");
  loginUI.getBtnLogin.click();

  cy.url().should("include", "/inventory.html");
  loginUI.getInventoryList.should("be.visible");
});
