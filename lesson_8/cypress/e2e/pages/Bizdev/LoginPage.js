const URL = "https://my.bizdev.vn/embed/login?type_view=&is_login=0";
const USERNAME =
  "input[placeholder='Nhập Email hoặc SĐT tài khoản VietID của bạn']";
const NEXT_BUTTON =
  ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-next-icon";
const PASSWORD = "input[id='show-pass']";
const BTN_LOGIN =
  ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-enter-pass";

export default class LoginPage {
  get getURL() {
    return URL;
  }

  get getUserName() {
    return USERNAME;
  }

  get getNextButton() {
    return NEXT_BUTTON;
  }

  get getPassWord() {
    return PASSWORD;
  }

  get getBTN_Login() {
    return BTN_LOGIN;
  }
}
