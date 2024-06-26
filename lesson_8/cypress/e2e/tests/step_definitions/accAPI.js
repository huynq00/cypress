import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "Tôi đã tạo tài khoản với username là {string} và password là {string}",
  (username, password) => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
      header: {
        "Content-Type": "application/json",
      },
      body: {
        userName: username,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.wrap(response.body).should("deep.include", {
        username: username,
      });
      let data = {
        username: username,
        password: password,
        userID: response.body.userID,
      };
      cy.writeFile("cypress/fixtures/dataLogin.json", data);
    });
  }
);
