const URL = "https://testpages.herokuapp.com/styled/basic-html-form-test.html";
const INPUT_USERNAME = "input[name='username']";
const INPUT_PASSWORD = "input[name='password']";
const TEXTAREA_COMMENTS = "textarea[name='comments']";
const INPUT_FILENAME = "input[name='filename']";
const INPUT_CB1 = "input[value='cb1']";
const INPUT_CB2 = "input[value='cb2']";
const INPUT_CB3 = "input[value='cb3']";
const INPUT_RD3 = "input[value='rd3']";
const OPTION_MS2 = "option[value='ms2']";
const SELECT_MS2 = "select[name='multipleselect[]']";
const SELECT_DD3 = "select[name='dropdown']";
const INPUT_SUBMIT = "input[value='submit']";

export default class FormUI {
  get getUrl() {
    return URL;
  }

  get getElmInputUsername() {
    return INPUT_USERNAME;
  }

  get getElmInputPassword() {
    return INPUT_PASSWORD;
  }

  get getElmTextareaComments() {
    return TEXTAREA_COMMENTS;
  }

  get getElmInputFilename() {
    return INPUT_FILENAME;
  }

  get getElmInputCB1() {
    return INPUT_CB1;
  }

  get getElmInputCB2() {
    return INPUT_CB2;
  }

  get getElmInputCB3() {
    return INPUT_CB3;
  }

  get getElmInputRD3() {
    return INPUT_RD3;
  }

  get getElmOptionMS2() {
    return OPTION_MS2;
  }

  get getElmSelectMS2() {
    return SELECT_MS2;
  }

  get getElmSelectDD3() {
    return SELECT_DD3;
  }

  get getElmInputSubmit() {
    return INPUT_SUBMIT;
  }

  get getInputUsername() {
    return cy.get(INPUT_USERNAME);
  }

  get getInputPassword() {
    return cy.get(INPUT_PASSWORD);
  }

  get getTextareaComments() {
    return cy.get(TEXTAREA_COMMENTS);
  }

  get getInputFilename() {
    return cy.get(INPUT_FILENAME);
  }

  get getInputCB1() {
    return cy.get(INPUT_CB1);
  }

  get getInputCB2() {
    return cy.get(INPUT_CB2);
  }

  get getInputCB3() {
    return cy.get(INPUT_CB3);
  }

  get getInputRD3() {
    return cy.get(INPUT_RD3);
  }

  get getOptionMS2() {
    return cy.get(OPTION_MS2);
  }

  get getSelectMS2() {
    return cy.get(SELECT_MS2);
  }

  get getSelectDD3() {
    return cy.get(SELECT_DD3);
  }

  get getInputSubmit() {
    return cy.get(INPUT_SUBMIT);
  }
}
