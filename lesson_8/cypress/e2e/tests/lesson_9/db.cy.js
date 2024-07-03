describe("TC1 Select all student", () => {
  it("select", () => {
    const sql = `SELECT * FROM students`;
    cy.query(sql).then((result) => {
      expect(result).to.have.length(9);

      result.forEach((student) => {
        cy.log(student.name);
      });
    });
  });
});

describe("TC2 Add student", () => {
  it("add", () => {
    const sql = `INSERT INTO students (adno, name, class, section, fees, house)
        VALUES (105, 'Huy', 12, 'A', 3000, 'Ngo House')`;
    cy.query(sql).then((result) => {
      expect(result.affectedRows).to.equal(1);
    });
  });
});

describe("TC3 Update student", () => {
  it("update", () => {
    const sql = `Update students set fees = '2000' where name = 'Huy'`;
    cy.query(sql).then((result) => {
      cy.log(result);
      expect(result.affectedRows).to.equal(1);
    });
  });
});

describe("TC4 Delete student", () => {
  it("delete", () => {
    const sql = `Delete from students where name = 'Huy'`;
    cy.query(sql).then((result) => {
      cy.log(result);
      expect(result.affectedRows).to.equal(1);
    });
  });
});
