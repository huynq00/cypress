describe("Pop-up", () => {
  it("Interact popup", () => {
    cy.visit("https://www.mingo.vn/#");
    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url, target, features) => {
        win.location.href = url;
      });
    });
    cy.get("#popupLink").should("be.visible").click();
    cy.url().should("include", "mingo.vn");
    cy.get("#myBtn").should("be.visible").click();
  });
});
