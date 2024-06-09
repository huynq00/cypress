describe("Customer", () => {
  before(() => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  });
  it("Transaction", () => {
    cy.get("button[ng-click='customer()']").should("be.visible").click();

    cy.get("select[id='userSelect']")
      .should("be.visible")
      .select("Hermoine Granger");

    cy.get("button[type='submit']").should("be.visible").click();

    cy.get("button[ng-click='deposit()']").should("be.visible").click();

    cy.get("input[ng-model='amount']")
      .should("be.visible")
      .type("1000")
      .should("have.value", "1000");

    cy.get("button[type='submit']").should("be.visible").click();

    cy.get("span[ng-show='message']")
      .should("be.visible")
      .should("have.text", "Deposit Successful");

    cy.get("button[ng-click='withdrawl()']").should("be.visible").click();

    cy.get("form[ng-submit='withdrawl()'] input[ng-model='amount']")
      .should("be.visible")
      .type("1000")
      .should("have.value", "1000");

    cy.get("button[type='submit']").should("be.visible").click();

    cy.get("span[ng-show='message']")
      .should("be.visible")
      .should("have.text", "Transaction successful");

    cy.get("button[ng-click='transactions()']").should("be.visible").click();

    cy.get("button[ng-show='showDate']").should("be.visible").click();

    cy.get("tbody tr:visible").should("have.length", 0);
  });
});
