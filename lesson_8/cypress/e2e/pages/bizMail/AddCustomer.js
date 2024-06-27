const BUTTON_ADD_CUSTOMER = "#btn-import-div";
const INPUT_CUSTOMER =
  "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
const INPUT_ADD_CUSTOMER =
  "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)";
const MODAL_NAME =
  "body > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)";
const INPUT_NAME =
  "body > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > input:nth-child(3)";
const BUTTON_NAME =
  "body > div:nth-child(27) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)";
const MODAL_SUCCESS =
  "body > div:nth-child(34) > div:nth-child(1) > div:nth-child(1)";
const BUTTON_OK_NAME = "button[class='btn btn-primary bootbox-accept']";
const INPUT_SOURCE =
  "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)";
const BUTTON_ADD_SOURCE =
  "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(1)";
const INPUT_NAME_SOURCE =
  "body > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > input:nth-child(4)";
const BUTTON_NAME_SOURCE =
  "body > div:nth-child(26) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)";
const LIST_SOURCE =
  "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1)";
const INPUT_EMAIL = "input[placeholder='Nhập email']";
const INPUT_NAME_CUSTOMER = "div[class='col-md-12 input-add-one p-0'] input[placeholder='Nhập tên']";
const INPUT_PHONE_NUMBER = "input[placeholder='Nhập số điện thoại']";
const BUTTON_ADD_CUSTOMER_END = "#btn-import-form";
const BUTTON_BACK_LIST = "div[id='importSuccessModal'] a:nth-child(1)";
export default class AddCustomer {
  get getButtonAddCustomer() {
    return BUTTON_ADD_CUSTOMER;
  }

  get getInputCustomer() {
    return INPUT_CUSTOMER;
  }

  get getInputAddCustomer() {
    return INPUT_ADD_CUSTOMER;
  }

  get getModalName() {
    return MODAL_NAME;
  }

  get getInputName() {
    return INPUT_NAME;
  }

  get getButtonName() {
    return BUTTON_NAME;
  }

  get getModalSuccess() {
    return MODAL_SUCCESS;
  }

  get getButtonOkName() {
    return BUTTON_OK_NAME;
  }

  get getInputSource() {
    return INPUT_SOURCE;
  }

  get getButtonAddSource() {
    return BUTTON_ADD_SOURCE;
  }

  get getInputNameSource() {
    return INPUT_NAME_SOURCE;
  }

  get getButtonNameSource() {
    return BUTTON_NAME_SOURCE;
  }

  get getListSource() {
    return LIST_SOURCE;
  }

  get getInputEmail() {
    return INPUT_EMAIL;
  }

  get getInputNameCustomer() {
    return INPUT_NAME_CUSTOMER;
  }

  get getInputPhoneNumber() {
    return INPUT_PHONE_NUMBER;
  }

  get getButtonAddCustomerEnd() {
    return BUTTON_ADD_CUSTOMER_END;
  }

  get getButtonBackList() {
    return BUTTON_BACK_LIST;
  }
}
