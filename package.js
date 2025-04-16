// package metadata file for ProXtyle

/* eslint-env meteor */

Package.describe({
  name: 'proxstyle', // Your package name
  summary: 'A high-performance CSS framework for building responsive, mobile-first web designs.',
  version: '1.0.0', // Adjust the version as necessary
  git: 'https://github.com/ProgrammerKR/ProXtyle.git' // Your GitHub URL for ProXtyle
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/proxstyle.css', // Path to your compiled CSS file
    'dist/js/proxstyle.js' // If you have JavaScript functionalities for ProXtyle
  ], 'client')
})
