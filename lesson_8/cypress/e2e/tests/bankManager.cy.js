describe("Bank Manager", () => {
  before(() => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  });
  it("Add Customer", () => {
    cy.get("button[ng-click='manager()']").should("be.visible").click();

    cy.get("button[ng-class='btnClass1']").should("be.visible").click();

    cy.get("input[ng-model='fName']")
      .should("be.visible")
      .clear()
      .type("Ha")
      .should("have.value", "Ha");

    cy.get("input[ng-model='lName']")
      .should("be.visible")
      .clear()
      .type("Nguyen")
      .should("have.value", "Nguyen");

    cy.get("input[ng-model='postCd']")
      .should("be.visible")
      .clear()
      .type("100001")
      .should("have.value", "100001");

    cy.get("button[type='submit']").should("be.visible").click();

    cy.on("window:alert", (text) => {
      text.should("include", "Customer added successfully with customer id");
      return true;
    });

    cy.get("button[ng-class='btnClass2']").should("be.visible").click();

    cy.get("select[id='userSelect']").should("be.visible").select("Ha Nguyen");

    cy.get("select[id='currency']").should("be.visible").select("Dollar");

    cy.get("button[type='submit']").should("be.visible").click();

    cy.on("window:alert", (text) => {
      text.should(
        "include",
        "Account created successfully with account Number"
      );
      return true;
    });

    cy.get("button[ng-class='btnClass3']").should("be.visible").click();

    cy.get("input[ng-model='searchCustomer']")
      .should("be.visible")
      .type("Nguyen")
      .should("have.value", "Nguyen");

    cy.get("tbody tr:visible").should("have.length", 1).and("contain", "Ha");
    cy.get("tbody tr:visible")
      .should("have.length", 1)
      .and("contain", "Nguyen");
    cy.get("tbody tr:visible")
      .should("have.length", 1)
      .and("contain", "100001");
    cy.get("button[ng-click='deleteCust(cust)']").should("be.visible").click();
  });
});
