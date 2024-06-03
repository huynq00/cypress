describe("Button click events", () => {
  before(() => {
    cy.log("before");
  });
  beforeEach(() => {
    cy.log("beforeEach");
  });
  //   beforeEach(() => {
  //     cy.visit("https://mingo.vn/#");
  //   });
  it("button click", () => {
    cy.visit("https://mingo.vn/#");

    cy.get("button[id='clickButton']").click();
    cy.get("p[id='message']").should("have.text", "Button clicked!");

    cy.get("button[id='dblClickButton']").dblclick();
    cy.get("p[id='message']").should("have.text", "Button double-clicked!");

    cy.get("button[id='rightClickButton']").rightclick();
    cy.get("p[id='message']").should("have.text", "Right button clicked!");

    cy.get("button[id='clickButton']").focus();
  });

  //   it("alert thong bao", () => {
  //     cy.visit("https://mingo.vn/#");

  //     cy.get("button#alertButton").click();

  //     cy.on("window:alert", (text) => {
  //       expect(text).to.equal("This is an alert message!");
  //     });

  //     cy.get("#alertButton").click();
  //   });

  //   it("alert confirm false", () => {
  //     cy.visit("https://mingo.vn/#");

  //     cy.get("#confirmButton").click();

  //     cy.on("window:confirm", (text) => {
  //       expect(text).to.equal("Do you confirm this action?");
  //       return false;
  //     });

  //     cy.get("#confirmResult").should("have.text", "Confirm result: false");
  //   });

  //   it("alert confirm true", () => {
  //     cy.visit("https://mingo.vn/#");

  //     cy.get("#confirmButton").click();

  //     cy.on("window:confirm", (text) => {
  //       expect(text).to.equal("Do you confirm this action?");
  //       return true;
  //     });

  //     cy.get("#confirmResult").should("have.text", "Confirm result: true");
  //   });
  //   it("should have prompt dialog and check result", () => {
  //     cy.visit("https://mingo.vn/#");
  //     cy.window().then((win) => {
  //       cy.stub(win, "prompt").returns("Cypress User");
  //     });
  //     cy.get("#promptButton").click();
  //     cy.get("#promptResult").should("have.text", "Prompt result: Cypress User");
  //   });

  //   it("viewport", () => {
  //     cy.visit("https://mingo.vn/#");
  //     cy.viewport(1280, 720);
  //     cy.wait(5000);
  //     cy.screenshot("large-screen");

  //     cy.viewport("iphone-6");
  //     cy.wait(5000);
  //     cy.screenshot("iphone-6");
  //   });

  //   it("invoke", () => {
  //     cy.get("#text-change-style")
  //       .invoke("attr", "style", "color: red; font-size: 20px")
  //       .should("have.attr", "style", "color: red; font-size: 20px");
  //     cy.wait(5000);

  //     cy.get("#text-change-style")
  //       .invoke("addClass", "style-text")
  //       .should("have.class", "style-text");
  //     cy.wait(5000);

  //     cy.get("#some-text")
  //       .invoke("removeClass", "style-text")
  //       .should("not.have.class", "style-text");
  //     cy.wait(5000);

  //     cy.get("#some-text")
  //       .invoke("removeClass", "style-text")
  //       .should("not.have.class", "style-text");
  //     cy.wait(5000);

  //     cy.get("#text-change-class")
  //       .invoke("toggleClass", "style-text");
  //       .should("have.class", "style-text");
  //     cy.wait(5000);

  //     cy.get("#text-change-class")
  //       .invoke("toggleClass", "style-text")
  //       .should("not.have.class", "style-text");
  //     cy.wait(5000);
  //   });

  afterEach(() => {
    cy.log("afterEach");
  });

  after(() => {
    cy.log("after");
  });
});
