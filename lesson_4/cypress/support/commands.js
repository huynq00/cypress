// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("inputText", function (elmUI, text) {
  elmUI
    .click()
    .clear()
    .type(text)
    .invoke("val")
    .then((val) => {
      expect(val).to.equal(text);
    });
});

Cypress.Commands.add("checkResult", (id_name, text) => {
  cy.get("li[id='" + id_name + "']").should("contain.text", text);
});
