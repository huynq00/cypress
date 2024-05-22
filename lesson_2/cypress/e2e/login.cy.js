describe("test login", () => {
  it("login", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name")
      .should("be.visible")
      .should("not.be.disabled")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("#password")
      .should("be.visible")
      .should("not.be.disabled")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");

    cy.get("#login-button").click();

    cy.url().should("include", "https://www.saucedemo.com/inventory.html");
  });

  it("fail", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name")
      .should("be.visible")
      .should("not.be.disabled")
      .type("locked_out_user")
      .should("have.value", "locked_out_user");
    cy.get("#password")
      .should("be.visible")
      .should("not.be.disabled")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("#login-button").click();

    cy.get("[data-test='error']").should(
      "contain.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
