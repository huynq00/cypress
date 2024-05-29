describe("TEST HOT", () => {
  it("Tìm món hot Pizza", () => {
    cy.visit("https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm");

    cy.get(".tablink").contains("Pizza").click();
    cy.get("#Pizza h1")
      .contains("Hot!")
      .siblings("b")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    cy.get("#Pizza h1")
      .contains("Hot!")
      .parent()
      .next("p")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  });
});
