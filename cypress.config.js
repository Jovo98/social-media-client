const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:63342/social-media-client',
        defaultCommandTimeout: 10000,
        viewportWidth: 1280,
        viewportHeight: 720,
        setupNodeEvents(on, config) {
        },
    },
})