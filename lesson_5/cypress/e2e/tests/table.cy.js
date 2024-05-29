describe("Kiểm tra hiển thị email trong bảng", () => {
  it("Kiểm tra email johndoe@example.com có hiển thị email trong bảng", () => {
    cy.visit("https://mingo.vn/#");

    cy.get("#dataTable").within(() => {
      cy.get(".td-mail").contains("johndoe@example.com").should("exist");
      cy.get("tbody td:nth-child(3)")
        .contains("johndoe@example.com")
        .should("exist");
      cy.get("#sttColumn").contains("Index");
    });
  });

  it("Kiểm tra email janesmith@example.com có hiển thị email trong bảng", () => {
    cy.visit("https://mingo.vn/#");

    let mail = "janesmith@example.com";

    cy.get("tbody td:nth-child(3)").each(($td) => {
      let haveText = $td.text();
      if (haveText === mail) {
        expect(haveText).to.equal(mail);
      }
    });
  });

  it("Tìm kiếm từ khóa Jane trong ô tìm kiếm và kiểm tra điều kiện hiển thị", () => {
    cy.visit("https://mingo.vn/#");

    let searchItem = "Jane";

    cy.get("#searchInput").type(searchItem);
    cy.get("#tableBody tr:visible")
      .should("have.length", 1)
      .and("contain", searchItem);
  });

  it("Tìm kiếm từ khóa ngocbich và click button vào hàng đó", () => {
    cy.visit("https://mingo.vn/#");

    let searchItem = "ngocbich";

    cy.get("#searchInput").type(searchItem);
    cy.get("#tableBody tr:visible")
      .should("have.length", 1)
      .and("contain", searchItem);
    cy.get("#tableBody").contains("tr", searchItem).click();
  });
});
