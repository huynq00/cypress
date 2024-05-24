describe("Login Page", () => {
  it("Success submit", () => {
    cy.visit(
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
    );

    let username = "username";
    let password = "password";
    let comments = "Hello, world!";

    cy.get("input[name='username']")
      .type(username)
      .should("have.value", username);
    cy.get("input[name='password']")
      .type(password)
      .should("have.value", password);
    cy.get("textarea[name='comments']")
      .clear()
      .type(comments)
      .should("have.value", comments);
    cy.get("input[name='filename']").selectFile(
      "/Users/DELL/Downloads/123456.jpg"
    );
    cy.get("input[value='cb1']").check();
    cy.get("input[value='cb2']").check();
    cy.get("input[value='cb3']").uncheck().should("not.be.checked");

    cy.get("input[value='rd3']").check();
    cy.get("option[value='ms2']").click();
    cy.get("select[name='multipleselect[]']").select("ms2");
    cy.get("select[name='dropdown']").select("dd3");

    cy.get("input[value='submit']").click();

    cy.url().should(
      "contain",
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    cy.get("li[id='_valueusername']").should("contain", username);
    cy.get("li[id='_valuepassword']").should("contain", password);
    cy.get("li[id='_valuecomments']").should("contain", comments);
    cy.get("li[id='_valuefilename']").should("contain", "123456.jpg");
    cy.get("li[id='_valuecheckboxes0']").should("contain", "cb1");
    cy.get("li[id='_valuecheckboxes1']").should("contain", "cb2");
    cy.get("li[id='_valueradioval']").should("contain", "rd3");
    cy.get("li[id='_valuemultipleselect0']").should("contain", "ms2");
    cy.get("li[id='_valuedropdown']").should("contain.text", "dd3");
    cy.get("li[id='_valuesubmitbutton']").should("contain", "submit");
  });
});
