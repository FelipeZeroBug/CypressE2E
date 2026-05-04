const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1440,
  viewportHeight: 900,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      chromeWebSecurity: false
      defaultCommandTimeout: 10000
      video: true
      screenshots:true
      pageLoadTimeout: 50000
      responseTimeout: 50000
      numTestsKeptInMemory: 50

    },
  },
});
