import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/Bizdev/LoginPage.js";
import AccountBiz from "../../../fixtures/bizdevLogin.js";
import { faker } from '@faker-js/faker';

const loginPage = new LoginPage();

Given("Truy cập vào trang login", () => { });
When("Tôi đăng nhập vào trang web", () => {
  cy.visit(loginPage.getURL);
  cy.get(loginPage.getUserName).type(AccountBiz.user_name);
  cy.get(loginPage.getNextButton).click();
  cy.wait(2000);
  cy.get(loginPage.getPassWord).type(AccountBiz.password);
  cy.get(loginPage.getBTN_Login).click();
  cy.wait(2000);
});
When("Tôi thêm sản phẩm", () => {
  cy.visit(
    "https://crm.bizdev.vn/base-table/list?table=data_product&project_id=5e8ed08f1a7d061b625c6161&set_sale_crm=1"
  );
  cy.get(".btn.btn-outline.menu-add-new").click();
  cy.get("div[class='container-scroller'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(3) ul:nth-child(1) li:nth-child(1) a:nth-child(1)").click({ force: true });
  cy.wait(2000);
  cy.visit("https://crm.bizdev.vn/frame/bizfly-client/base-table/input-full?table=data_product&amp;sdk_version=1.0&amp;_s=1718683592&amp;project_token=54a306fe-fc84-4264-b6bc-026536502d6e&amp;client_token=7b35afbc8a19900b42bebf6fc95344e5536ad3818104b95f1c0db593c2307e278b1afe7ddaab7c48036a08e93509ca76a37b6f9f0300805dd65f5797b55cf0a2&amp;api_embed_key=JUDAeSwsSFRFfd54ukCntZHEFV8KpPvFTVTUJz3&amp;form_view_mode=&amp;from=&amp;frame_id=bmdhbm52XzM");
  cy.get("input[placeholder='Nhập mã sản phẩm']").type(faker.random.alphaNumeric(10));
  cy.get("input[placeholder='Nhập tên sản phẩm']").type(faker.commerce.productName());
  cy.get("input[placeholder='Nhập giá'][type='text']").clear().type(faker.commerce.price());
  cy.get("#s2id_autogen1").type(faker.commerce.department()).type('{enter}');
  cy.get("#s2id_autogen2").type(faker.helpers.arrayElements([
    'new', 'sale', 'popular', 'trending', 'exclusive', 'limited edition', 'bestseller'
  ], faker.datatype.number({ min: 1, max: 3 }))).type('{enter}');
  cy.get("#js_saveButton").click();
  cy.get(".swal2-popup.swal2-modal.default_crm_swal.swal2-icon-success.swal2-show").within(() => {
    cy.get("button[class='swal2-confirm swal2-styled swal2-default-outline']").click();
  });
  cy.visit("https://crm.bizdev.vn/base-table/list?table=data_product&project_id=5e8ed08f1a7d061b625c6161&set_sale_crm=1");
});