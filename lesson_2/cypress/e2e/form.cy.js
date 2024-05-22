describe("Form input", () => {
  it("Fill", () => {
    cy.visit("https://mingo.vn/");

    cy.get("#textInput")
      .type("Hello, world!")
      .should("have.value", "Hello, world!");
    cy.get("#emailInput")
      .type("abc@gmail.com")
      .should("have.value", "abc@gmail.com");
    cy.get("#passwordInput").type("123456").should("have.value", "123456");
    cy.get("#numberInput").type("123456").should("have.value", "123456");
    cy.get("#dateInput").type("2024-02-10").should("have.value", "2024-02-10");
    cy.get("#checkboxInput").click().should("be.checked");
    cy.get("#radioInput2").click().should("be.checked");
    cy.get("#selectInput").select(2).should("have.value", "Option 3");

    // cy.get("button[type='submit']").click();
  });
});
