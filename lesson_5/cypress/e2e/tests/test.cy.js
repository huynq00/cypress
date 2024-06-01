describe("Tìm giá trị trong danh sách", () => {
  it("Tìm món hot Pizza", () => {
    cy.visit("https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm");

    //   cy.get(".tablink").contains("Pizza").click();
    //   cy.get("#Pizza h1")
    //     .contains("Hot!")
    //     .siblings("b")
    //     .invoke("text")
    //     .then((text) => {
    //       cy.log(text);
    //     });

    //   cy.get("#Pizza h1")
    //     .contains("Hot!")
    //     .parent()
    //     .next("p")
    //     .invoke("text")
    //     .then((text) => {
    //       cy.log(text);
    //     });

    cy.get("#Pizza h1").each(($h1) => {
      if ($h1.text().includes("Hot!")) {
        cy.log($h1.text());
      }
    });

    cy.get("#Pizza h1").each(($h1) => {
      if ($h1.text().includes("Hot!")) {
        const pText = $h1.next("p").text();
        cy.log(pText);
      }
    });
  });

  it("Tìm món popular Salads", () => {
    cy.visit("https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm");

    cy.get(".tablink").contains("Salads").click();

    cy.get("#Pasta h1").each(($h1) => {
      if ($h1.text().includes("Popular")) {
        cy.log($h1.text());
      }
    });

    cy.get("#Pasta h1").each(($h1) => {
      if ($h1.text().includes("Popular")) {
        const pText = $h1.next("p").text();
        cy.log(pText);
      }
    });
  });

  it("Tìm món Seasonal Starter", () => {
    cy.visit("https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm");

    cy.get(".tablink").contains("Starter").click();

    cy.get("#Starter h1").each(($h1) => {
      if ($h1.text().includes("Seasonal")) {
        cy.log($h1.text());
      }
    });

    cy.get("#Starter h1").each(($h1) => {
      if ($h1.text().includes("Seasonal")) {
        const pText = $h1.next("p").text();
        cy.log(pText);
      }
    });
  });

  it("Kiểm tra menu điều hướng", () => {
    cy.visit("https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm");

    cy.get("#myNavbar").contains("HOME").click();
    cy.url().should(
      "eq",
      "https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm#"
    );
    cy.get("#home").should("be.visible");

    cy.get("#myNavbar").contains("MENU").click();
    cy.url().should("include", "#menu");
    cy.get("#menu").should("be.visible");

    cy.get("#myNavbar").contains("ABOUT").click();
    cy.url().should("include", "#about");
    cy.get("#about").should("be.visible");

    cy.get("#myNavbar").contains("CONTACT").click();
    cy.url().should("include", "#myMap");
    cy.get("#myMap").should("be.visible");
  });
});
