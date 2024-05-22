describe("submit form", () => {
  it("submit", () => {
    cy.visit("https://demoqa.com/text-box");

    cy.get("#userName").type("Hello World");
    cy.get("#userEmail").type("hello@gmail.com");
    cy.get("#currentAddress").type("11");
    cy.get("#permanentAddress").type("11");
    cy.get("#submit").click();
  });
});
