const { defineConfig } = require('vite');

module.exports = defineConfig({
  // Include custom assets like .txt files in the Vite asset pipeline
  assetsInclude: ['**/*.txt'],
  // Use a relative base path for static assets if you serve the app from a subpath
  base: './',
});
