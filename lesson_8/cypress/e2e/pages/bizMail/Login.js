const URL = "https://my.bizdev.vn/login";
const USERNAME =
  "input[placeholder='Nhập Email hoặc SĐT tài khoản VietID của bạn']";
const NEXT_BUTTON =
  ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-next-icon";
const PASSWORD = "input[id='show-pass']";
const BTN_LOGIN =
  ".btn.btn-block.btn-blue.font-Sarabun-Bold.font16.btn-enter-pass";
const URL_HOME = "https://my.bizdev.vn/";
const TEXT_HOME = "div[class='box_info'] div[class='title']";
export default class Login {
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

  get getURLHome() {
    return URL_HOME;
  }
}
