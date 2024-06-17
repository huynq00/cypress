import { faker } from "@faker-js/faker";
describe("Login Page", () => {
  it("Write data", () => {
    const generateFakeFormData = () => {
      return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        comments: faker.lorem.sentences(2),
        filename: faker.system.fileName(),
        checkbox1: faker.datatype.boolean(),
        checkbox2: faker.datatype.boolean(),
        checkbox3: faker.datatype.boolean(),
        radiobutton: faker.helpers.arrayElement(["rd1", "rd2", "rd3"]),
        multipleSelectValues: [
          faker.helpers.arrayElement(["ms1", "ms2", "ms3", "ms4"]),
          faker.helpers.arrayElement(["ms1", "ms2", "ms3", "ms4"]),
        ],
        dropdown: faker.helpers.arrayElement(["dd1", "dd2", "dd3", "dd4"]),
      };
    };

    const fakeData = generateFakeFormData();

    cy.writeFile("cypress/fixtures/fakeFile.json", fakeData);

    cy.visit(
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
    );

    cy.fixture("fakeFile").then((data) => {
      cy.log(data);
      cy.get("input[name='username']")
        .type(data.username)
        .should("have.value", data.username);
      cy.get("input[name='password']")
        .type(data.password)
        .should("have.value", data.password);
      cy.get("textarea[name='comments']")
        .clear()
        .type(data.comments)
        .should("have.value", data.comments);
      cy.get("input[name='filename']").selectFile(
        "/Users/DELL/Downloads/Naruto.jpg"
      );
      cy.get("input[value='cb1']").check();
      cy.get("input[value='cb2']").check();
      cy.get("input[value='cb3']").uncheck().should("not.be.checked");

      cy.get(`input[value="${data.radiobutton}"]`).check();
      cy.get("option[value='ms2']").click();
      cy.get("select[name='multipleselect[]']").select(
        data.multipleSelectValues[0]
      );
      cy.get("select[name='multipleselect[]']").select(
        data.multipleSelectValues[1]
      );
      cy.get("select[name='dropdown']").select("dd3");

      cy.get("input[value='submit']").click();
    });
  });
});
