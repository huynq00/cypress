const CHOOSE_PROJECT = ".choose_project";
const MY_PROJECT = "li[data-name='huynq']";
const BIZ_MAIL = ".item_solution.item_service";
const ADD_CUSTOMER =
  "div[class='dashContacts'] div button[class='btn-custom btn-custom-standard-primary']";

export default class JoinProject {
  get getChooseProject() {
    return CHOOSE_PROJECT;
  }

  get getMyProject() {
    return MY_PROJECT;
  }

  get getBizMail() {
    return BIZ_MAIL;
  }

  get getAddCustomer() {
    return ADD_CUSTOMER;
  }
}
