describe("test login", () => {
  it("login", () => {
    cy.Login();

    cy.get("#add-to-cart-sauce-labs-backpack").click();

    cy.get("#add-to-cart-sauce-labs-bike-light").click();

    cy.get("#shopping_cart_container").click();
    cy.url().should("include", "/cart.html");

    cy.get(".cart_item").should("contain", "Sauce Labs Bike Light");
    cy.get(".cart_item").should("contain", "Sauce Labs Backpack");
  });
});
