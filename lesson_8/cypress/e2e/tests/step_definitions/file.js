import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Truy cập trang web", () => {
  cy.visit("https://the-internet.herokuapp.com/upload");
});

When("Tôi đọc file", () => {
  cy.readFile("cypress/fixtures/example.json").then((data) => {
    expect(data.name).to.equal("Using fixtures to represent data");
  });
});

When("Tôi ghi file", () => {
  const text = "Hello";
  cy.writeFile("cypress/fixtures/textFile.txt", text, { flag: "a" });
});

When("Tôi upload file", () => {
  cy.visit("https://the-internet.herokuapp.com/upload");
  cy.get("input[id='file-upload']").selectFile(
    "/Users/DELL/Downloads/Naruto.jpg"
  );
  cy.get("input[id='file-submit']").click();
});

// When("Tôi download file", () => {
//     let elmDownload = cy.get("");
//     let fileNamePath = "cypress/fixtures/fileNamePath.txt";
//     elmDownload
//     .invoke("a", "href")
//     .then((downloadLink) => {
//         cy.request({
//             url: downloadLink,
//             encoding: "binary"
//         })
//     })
// });
