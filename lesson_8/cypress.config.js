const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mysql = require("cypress-mysql");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  return config;
}
// 951f0f87-dcbc-4eb9-89ea-f3cd57d8d2c4
// npx cypress run --record --key 951f0f87-dcbc-4eb9-89ea-f3cd57d8d2c4
module.exports = defineConfig({
  projectId: "oenwhr",
  e2e: {
    chromeWebSecurity: false,
    experimentalStudio: true,
    specPattern: "**/*.feature", // setup cucumber feature
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    // setupNodeEvents(on, config) {
    //   mysql.configurePlugin(on);
    // },
    // env: {
    //   db: {
    //     host: "sql12.freemysqlhosting.net",
    //     user: "sql12716277",
    //     password: "Qn8xs3F9Bx",
    //     database: "sql12716277",
    //   },
    // },
  },
});
