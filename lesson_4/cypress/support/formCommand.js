import FormUI from "../e2e/pages/formUI";

const formUI = new FormUI();

Cypress.Commands.add("Form", () => {
  cy.visit(formUI.getUrl);

  let username = "username";
  let password = "password";
  let comments = "Hello, world!";

  cy.inputText(formUI.getInputUsername, username);
  cy.inputText(formUI.getInputPassword, password);
  cy.inputText(formUI.getTextareaComments, comments);

  formUI.getInputFilename.selectFile("/Users/DELL/Downloads/Naruto.jpeg");
  formUI.getInputCB1.check();
  formUI.getInputCB2.check();
  formUI.getInputCB3.uncheck().should("not.be.checked");

  formUI.getInputRD3.check();
  formUI.getOptionMS2.click();
  formUI.getSelectMS2.select("ms2");
  formUI.getSelectDD3.select("dd3");

  formUI.getInputSubmit.click();

  cy.url().should("include", "/the_form_processor.php");

  cy.checkResult("_valueusername", username);
  cy.checkResult("_valuepassword", password);
  cy.checkResult("_valuecomments", comments);
  cy.checkResult("_valuefilename", "Naruto.jpeg");
  cy.checkResult("_valuecheckboxes0", "cb1");
  cy.checkResult("_valuecheckboxes1", "cb2");
  cy.checkResult("_valueradioval", "rd3");
  cy.checkResult("_valuemultipleselect0", "ms2");
  cy.checkResult("_valuedropdown", "dd3");
  cy.checkResult("_valuesubmitbutton", "submit");
});
