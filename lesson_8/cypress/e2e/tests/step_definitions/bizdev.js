import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/Bizdev/LoginPage.js";
import AccountBiz from "../../../fixtures/bizdevLogin.js";

const loginPage = new LoginPage();

Given("Truy cập vào trang login", () => {});
When("Tôi đăng nhập vào trang web", () => {
  cy.visit(loginPage.getURL);
  cy.get(loginPage.getUserName).type(AccountBiz.user_name);
  cy.get(loginPage.getNextButton).click();
  cy.wait(2000);
  cy.get(loginPage.getPassWord).type(AccountBiz.password);
  cy.get(loginPage.getBTN_Login).click();
  cy.wait(4000);
  cy.visit(
    "https://crm.bizdev.vn/base-table/list?table=data_product&project_id=5e8ed08f1a7d061b625c6161&set_sale_crm=1"
  );
  cy.get(".btn.btn-outline.menu-add-new").click();
});
