describe("Modal", () => {
  it("should open modal and interact with modal", () => {
    cy.visit("https://www.mingo.vn/#");
    cy.get("#myBtn").should("be.visible").click();

    cy.get(".modal-content").should("be.visible");

    cy.get(".modal-content").within(() => {
      cy.get("p").should("have.text", "Some text in the Modal..");
      cy.get("#modalButton").should("be.visible").click();
    });

    cy.get(".close").should("be.visible").click();

    cy.get(".modal-content").should("not.be.visible");
  });
});
