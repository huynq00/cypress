import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import moment from "moment";

Given("I open sample page", () => {
  cy.visit("https://mingo.vn/");
});

When("I open the Select2 dropdown", () => {
  cy.get(".select2-selection").click();
});

When("I search and select {string}", (option) => {
  cy.get(".select2-search__field").type(option, { force: true });
  cy.get(".select2-results__option").contains(option).click();
});

When("I open the datetime picker", () => {
  cy.get("#datetimepicker").click(); // Open the datetime picker
});

When("I select the date {string}", (date) => {
  const [year, month, day, hour, minute, period] = date.split(/[- :]/);
  const formattedDate = moment(date, "YYYY/MM/DD").format("MMMM DD, YYYY");
  cy.get(".flatpickr-calendar").then(($calendar) => {
    cy.wrap($calendar)
      .find(".flatpickr-monthDropdown-months")
      .select(parseInt(month) - 1); // Select the month
    cy.wrap($calendar).find("input[aria-label='Year']").clear().type(year); // Select the year cy.wrap($calendar).find.flatpickr-day [aria-label="${formattedDate)").click(); // Select the day cy.wrap($calendar).find('.flatpickr-hour').clear().type(hour); // Select the hour cy.wrap($calendar).find('.flatpickr-minute').clear().type(minute); // Select the minute
    cy.wrap($calendar)
      .find(`.flatpickr-day[aria-label="${formattedDate}"]`)
      .click();
    cy.wrap($calendar).find(".flatpickr-hour").clear().type(hour);
    cy.wrap($calendar).find(".flatpickr-minute").clear().type(minute);
    cy.get(".flatpickr-am-pm")
      .contains(period)
      .should("not.exist")
      .then(() => {
        cy.get(".flatpickr-am-pm").click();
      });
  });
  cy.get("body").click(); // Click outside to close the datetime picker
});
