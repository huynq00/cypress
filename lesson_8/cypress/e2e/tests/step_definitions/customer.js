import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Truy cập trang login", () => {
  cy.visit(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
  );
});

When('Tôi chọn tài khoản "Hermoine Granger" ở selectbox "Your Name"', () => {
  cy.get("button[ng-click='customer()']").should("be.visible").click();
  cy.get("select[id='userSelect']")
    .should("be.visible")
    .select("Hermoine Granger");
  cy.get("button[type='submit']").should("be.visible").click();
});

Then("Kiểm tra đã vô trang account", () => {
  cy.url().should(
    "include",
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account"
  );
});

When("Tôi thực hiện gửi tiền", () => {
  cy.get("button[ng-click='deposit()']").should("be.visible").click();

  cy.get("input[ng-model='amount']")
    .should("be.visible")
    .type("1000")
    .should("have.value", "1000");

  cy.get("button[type='submit']").should("be.visible").click();
});

Then("Kiểm tra đã gửi tiền thành công chưa", () => {
  cy.get("span[ng-show='message']")
    .should("be.visible")
    .should("have.text", "Deposit Successful");
});

When("Tôi thực hiện rút tiền", () => {
  cy.get("button[ng-click='withdrawl()']").should("be.visible").click();

  cy.get("form[ng-submit='withdrawl()'] input[ng-model='amount']")
    .should("be.visible")
    .type("1000")
    .should("have.value", "1000");

  cy.get("button[type='submit']").should("be.visible").click();
});

Then("Kiểm tra đã rút tiền thành công chưa", () => {
  cy.get("span[ng-show='message']")
    .should("be.visible")
    .should("have.text", "Transaction successful");
});
