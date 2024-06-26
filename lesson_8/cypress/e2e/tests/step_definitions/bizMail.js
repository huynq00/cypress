import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/bizMail/Login";
import JoinProject from "../../pages/bizMail/JoinProject";
import AddCustomer from "../../pages/bizMail/AddCustomer";
import { faker } from "@faker-js/faker";

const login = new Login();
const joinProject = new JoinProject();
const addCustomer = new AddCustomer();

Given("Truy cập trang login để vô bizMail", () => {
  cy.visit(login.getURL);
});

When("Tôi đăng nhập tài khoản vào trang web", () => {
  const email = "techtest.rd2@gmail.com";
  const password = "A123456!";

  cy.frameLoaded("#embed_login");

  cy.iframe("#embed_login").within(() => {
    cy.get(login.getUserName)
      .should("be.enabled")
      .type(email)
      .should("have.value", email);

    cy.get(login.getNextButton).click();

    cy.get(login.getPassWord)
      .should("be.enabled")
      .type(password)
      .should("have.value", password);

    cy.get(login.getBTN_Login).click();
  });
});

Then("Kiểm tra đã vào trang web", () => {
  cy.wait(3000);
  cy.url().should("include", login.getURLHome);
});

When("Tôi chọn dự án bizMail của tôi", () => {
  cy.get(joinProject.getChooseProject).click();
  cy.get(joinProject.getMyProject).click();
  cy.get(joinProject.getBizMail).click();
  cy.get(joinProject.getAddCustomer).click();
});

When("Tôi thêm khách hàng bằng phương pháp thủ công", () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const fullName = `${firstName} ${lastName}`;
  cy.get(addCustomer.getButtonAddCustomer).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputCustomer).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputAddCustomer).click();
  cy.get(addCustomer.getInputName).type(fullName);
  cy.get(addCustomer.getButtonName).click();
  cy.wait(1000);
  cy.get(addCustomer.getButtonOkName).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputCustomer).click();
  cy.get("#contact_list_drop").within(() => {
    cy.contains("li", fullName).click();
  });
  cy.get(
    "div[id='oneSelectList'] button[class='btn-custom btn-custom-standard-primary']"
  ).click();

  const nameSource = faker.name.lastName();

  cy.get(addCustomer.getInputSource).click();
  cy.wait(1000);
  cy.get(addCustomer.getButtonAddSource).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputNameSource).type(nameSource);
  cy.get(addCustomer.getButtonNameSource).click();
  cy.wait(1000);
  cy.get(addCustomer.getButtonOkName).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputSource).click();
  cy.get(addCustomer.getListSource).within(() => {
    cy.contains("li", nameSource).click();
  });
});
