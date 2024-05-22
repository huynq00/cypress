describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get('//div//input[@id="user-name"]').type("standard_user");
    cy.get('//div//input[@id=""]').type("standard_user");
  });
});
