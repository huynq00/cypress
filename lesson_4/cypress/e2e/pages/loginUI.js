const URL = "https://www.saucedemo.com/";
const INPUT_USERNAME = "#user-name";
const INPUT_PASSWORD = "#password";
const BTN_LOGIN = "#login-button";
const INVENTORY_LIST = ".inventory_list";

export default class LoginUI {
  get getUrl() {
    return URL;
  }

  get getElmInputUsername() {
    return INPUT_USERNAME;
  }

  get getElmInputPassword() {
    return INPUT_PASSWORD;
  }

  get getElmBtnLogin() {
    return BTN_LOGIN;
  }

  get getElmInventoryList() {
    return INVENTORY_LIST;
  }

  get getInputUsername() {
    return cy.get(INPUT_USERNAME);
  }

  get getInputPassword() {
    return cy.get(INPUT_PASSWORD);
  }

  get getBtnLogin() {
    return cy.get(BTN_LOGIN);
  }

  get getInventoryList() {
    return cy.get(INVENTORY_LIST);
  }
}
