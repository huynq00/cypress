describe("TRIGGER", () => {
  beforeEach(() => {
    cy.visit("https://mingo.vn/#");
  });
  //   it("hover mouse", () => {
  //     cy.get("#hover-box")
  //       .trigger("mouseover")
  //       .wait(5000)
  //       .should("have.class", "hovered")
  //       .trigger("mouseout")
  //       .should("not.have.class", "hovered");
  //   });
  //   it("tooltip", () => {
  //     // cy.get(".tooltip").trigger("mouseover");
  //     cy.get(".tooltip").realHover().wait(5000);
  //     cy.get(".tooltiptext").should("have.text", "Tooltip text");
  //   });
  //   it("tooltip hidden", () => {
  //     cy.get(".tooltiptext").should("not.be.visible");
  //   });

  //   beforeEach(() => {
  //     cy.visit("https://demoqa.com/droppable");
  //   });

  //   it("drag drop", () => {
  //     cy.get("#draggable").as("source");

  //     cy.xpath("//div[@id='simpleDropContainer']//div[@id='droppable']").as(
  //       "target"
  //     );

  //     cy.get("@source").trigger("mousedown", { which: 1 });
  //     cy.get("@target")
  //       .trigger("mousemove", { clientX: 0, clientY: 100 })
  //       .trigger("mouseup", { force: true });
  //     cy.wait(6000);
  //   });

  //   it("scroll", () => {
  //     cy.get("#scroll-container").scrollIntoView();

  //     cy.wait(2000);
  //     cy.get("#scroll-container").scrollTo(0, 200);

  //     cy.wait(2000);
  //     cy.get("#scroll-container").scrollTo("bottom");

  //     cy.wait(2000);
  //     cy.get("#scroll-container").scrollTo("top");

  //     cy.wait(2000);
  //     cy.get("#droppable").scrollIntoView();
  //   });
});
