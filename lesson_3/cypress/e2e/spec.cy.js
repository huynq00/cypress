describe("test login", () => {
  it("login", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.xpath("//input[@data-test='username']")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.xpath("//input[@data-test='password']")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");

    cy.xpath("//input[@data-test='login-button']").click();

    cy.url().should("include", "/inventory.html");
    cy.xpath("//div[@class='inventory_container']").should("be.visible");
  });
});
