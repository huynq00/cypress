import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../pages/bizMail/Login";
import JoinProject from "../../pages/bizMail/JoinProject";
import AddCustomer from "../../pages/bizMail/AddCustomer";
import { faker } from "@faker-js/faker";

const login = new Login();
const joinProject = new JoinProject();
const addCustomer = new AddCustomer();
const email = faker.internet.email();

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

//Thủ công

When("Tôi thêm khách hàng bằng phương pháp thủ công", () => {
  const randomType = faker.name.firstName()
  cy.get(addCustomer.getButtonAddCustomer).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputCustomer).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputAddCustomer).click();
  cy.get(addCustomer.getInputName).type(randomType);
  cy.get(addCustomer.getButtonName).click();
  cy.wait(2000);
  cy.get(addCustomer.getButtonOkName).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputCustomer).click();
  cy.get("#contact_list_drop").within(() => {
    cy.contains("li", randomType).click();
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
  cy.wait(2000);
  cy.get(addCustomer.getButtonOkName).click();
  cy.wait(1000);
  cy.get(addCustomer.getInputSource).click();
  cy.get(addCustomer.getListSource).within(() => {
    cy.contains("li", nameSource).click();
  });
  cy.get(addCustomer.getInputEmail).type(email);
  cy.get(addCustomer.getInputNameCustomer).type(`${faker.name.firstName()} ${faker.name.lastName()}`);
  cy.get(addCustomer.getInputPhoneNumber).type(faker.phone.number());
  cy.get(addCustomer.getButtonAddCustomerEnd).click();
  cy.get(addCustomer.getButtonBackList).click();
});

Then("Kiểm tra đã thêm khách hàng vào danh sách khách hàng", () => {
  cy.wait(1000);
  cy.get("tbody td:nth-child(2)")
    .contains(email)
    .should("exist");
});

//Import file

When("Tôi thêm khách hàng bằng phương pháp import file", () => {
  cy.get(addCustomer.getButtonAddCustomer).click();
  cy.get("#import-many").click({ force: true });
  cy.get(".btn-custom.btn-custom-outline-primary.btn-biz-rounded.absolute").click();
  cy.wait(2000);
  cy.get("#file-excel").selectFile("cypress/fixtures/Export_1719473253217.xlsx", { force: true });
  cy.wait(2000);
  cy.get("#btn-next-step2").click();
  cy.wait(2000);
  cy.get("td[title='Tên'] div[class='input']").click();
  cy.wait(1000);
  cy.get("div[data-label='Tên'] ul[class='group-field group-field-main']").within(() => {
    cy.contains("li a span", "tên").click();
  });
  cy.get("td[title='Email'] div[class='input']").click();
  cy.wait(1000);
  cy.get("div[data-label='Email'] ul[class='group-field group-field-main']").within(() => {
    cy.contains("li a span", "email").click();
  });
  cy.get("td[title='Ngày tạo'] div[class='input']").click();
  cy.wait(1000);
  cy.get("div[data-label='Ngày tạo'] ul[class='group-field group-field-main']").within(() => {
    cy.contains("li a span", "Ngày tạo").click();
  });
  cy.wait(1000);
  cy.get("#btn-next-step3").click();

  cy.wait(1000);
  const randomType = faker.name.firstName()
  cy.wait(1000);
  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)").click();
  cy.wait(1000);
  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)").click();
  cy.get("body > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > input:nth-child(3)").type(randomType);
  cy.get("body > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)").click();
  cy.wait(2000);
  cy.get(addCustomer.getButtonOkName).click();
  cy.wait(1000);
  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)").click();
  cy.get("#ul-lists-import-many").within(() => {
    cy.contains("li", randomType).click();
  });
  cy.get(
    "div[class='absolute dropdown-show btn-shadow btn-border'] button[class='btn-custom btn-custom-standard-primary']"
  ).click();

  const nameSource = faker.name.lastName();

  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)").click();
  cy.wait(1000);
  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(1)").click();
  cy.wait(1000);
  cy.get("body > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > input:nth-child(4)").type(nameSource);
  cy.get("body > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click();
  cy.wait(2000);
  cy.get(addCustomer.getButtonOkName).click();
  cy.wait(1000);
  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)").click();
  cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1)").within(() => {
    cy.contains("li", nameSource).click();
  });
  cy.get("#btn-submit-import").click();
  cy.wait(3000);
  cy.get("div[id='importSuccessManyModal'] a[type='button']").click();
});

Then("Kiểm tra đã thêm khách hàng vào danh sách khách hàng với cách import file", () => {
  cy.wait(1000);
  cy.get("tbody td:nth-child(2)")
    .contains("nguyenvana@vccorp.vn")
    .should("exist");
});