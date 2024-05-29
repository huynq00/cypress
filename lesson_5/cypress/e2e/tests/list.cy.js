describe("Kiểm tra hiển thị trong list", () => {
  it("Kiểm tra Banana có hiển thị trong list không", () => {
    cy.visit("https://mingo.vn/#");

    cy.get(".list-group").contains("Banana");
    let number = 0;
    cy.get("ul li.list-group-item")
      .each(($li) => {
        let haveText = $li.text();
        if (haveText === "Banana") {
          number += 1;
          expect(haveText).to.equal("Banana");
        }
      })
      .then(() => {
        expect(number).to.equal(1);
      });
  });

  it("should have Digital Marketing and click it", () => {
    cy.visit("https://mingo.vn/#");

    cy.get("#navbarDropdownMenuLink.nav-link")
      .contains("Services")
      .should("exist")
      .click();

    cy.get(".dropdown-menu")
      .contains("Digital Marketing")
      .should("exist")
      .click();
  });

  it("check Menu tab", () => {
    cy.visit("https://mingo.vn/#");

    cy.get(".tablinks").contains("London").should("exist").click();
    cy.get("#London h3").contains("London");
    cy.get("#London p").contains("London is the capital city of England.");

    cy.get(".tablinks").contains("Paris").should("exist").click();
    cy.get("#Paris h3").contains("Paris");
    cy.get("#Paris p").contains("Paris is the capital of France.");

    cy.get(".tablinks").contains("Tokyo").should("exist").click();
    cy.get("#Tokyo h3").contains("Tokyo");
    cy.get("#Tokyo p").contains("Tokyo is the capital of Japan.");
  });
});
