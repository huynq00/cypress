import "cypress-iframe";

describe("Iframe", () => {
  //   it("Interact iframe", () => {
  //     cy.visit("https://my.bizdev.vn/embed/login?type_view=&is_login=0");

  //     const email = "techtest.rd2@gmail.com";
  //     const password = "A123456!";

  //     cy.get("input[name='account']")
  //       .should("be.enabled")
  //       .type(email)
  //       .should("have.value", email);
  //     cy.get(
  //       ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-next-icon"
  //     ).click();

  //     cy.get("input[name='password']")
  //       .should("be.enabled")
  //       .type(password)
  //       .should("have.value", password);
  //     cy.get(
  //       ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-enter-pass"
  //     ).click();

  //     cy.wait(4000);
  //     cy.visit("https://my.bizdev.vn/");
  //     cy.get(".btn.btn_action").should("be.visible").click();
  //   });

  // it("interact iframe wrap", () => {
  //   cy.visit("https://my.bizdev.vn/login");

  //   const email = "techtest.rd2@gmail.com";
  //   const password = "A123456!";

  //   cy.get("#embed_login").then(($iframe) => {
  //     const iframeDoc = $iframe.contents().find("body");

  //     cy.wrap(iframeDoc)
  //       .find("input[name='account']")
  //       .should("be.enabled")
  //       .type(email)
  //       .should("have.value", email);

  //     cy.wrap(iframeDoc)
  //       .find(".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-next-icon")
  //       .click();

  //     cy.wrap(iframeDoc)
  //       .find("input[name='password']")
  //       .should("be.enabled")
  //       .type(password)
  //       .should("have.value", password);

  //     cy.wrap(iframeDoc)
  //       .find(".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-enter-pass")
  //       .click();

  //     //   cy.wrap(iframeDoc).within(() => {
  //     //     cy.wait(4000); // Wait for 4 seconds

  //     //     cy.get("input[name='account']")
  //     //       .should("be.enabled")
  //     //       .type(email)
  //     //       .should("have.value", email);

  //     //     cy.wait(4000); // Wait for 4 seconds

  //     //     cy.get(
  //     //       ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-next-icon"
  //     //     ).click();

  //     //     cy.wait(4000); // Wait for 4 seconds

  //     //     cy.get("input[name='password']")
  //     //       .should("be.enabled")
  //     //       .type(password)
  //     //       .should("have.value", password);

  //     //     cy.wait(4000); // Wait for 4 seconds

  //     //     cy.get(
  //     //       ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-enter-pass"
  //     //     ).click();
  //     //   });
  //   });
  // });

  it("iframe library", () => {
    cy.visit("https://my.bizdev.vn/login");

    const email = "techtest.rd2@gmail.com";
    const password = "A123456!";

    cy.frameLoaded("#embed_login");

    cy.iframe("#embed_login").within(() => {
      cy.get("input[name='account']")
        .should("be.enabled")
        .type(email)
        .should("have.value", email);

      cy.get(
        ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-next-icon"
      ).click();

      cy.get("input[name='password']")
        .should("be.enabled")
        .type(password)
        .should("have.value", password);

      cy.get(
        ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-enter-pass"
      ).click();
    });
  });
});
