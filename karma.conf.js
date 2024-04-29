// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const os = require('os');

module.exports = function (config) {

  // Run headless from Linux
  let defaultBrowser = os.platform() === 'linux' ? 'ChromeHeadless' : 'Chrome';

  config.set({
    basePath: '',
    frameworks: ['jasmine',  '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files:[
      { pattern: './node_modules/@slb-dls/angular-material/assets/icons/svg-symbols.svg', watched: false, included: false, nocache: false, served: true }
    ],
    proxies: {
      "/assets/": "/base/assets/",
      "/assets/": "/base/node_modules/@slb-dls/angular-material/assets/",
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
        dir: require('path').join(__dirname, '../test-reports/app'),
        reporters: [
            { type: 'html', subdir: 'report-html' },
            { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
            { type: 'lcovonly', subdir: '.', file: 'coverage.lcov' },
            { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
        ]
    },
    junitReporter: {
      outputDir: '../test-reports/app'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
    ? ["progress", "coverage", "junit"]
    : ["progress", "kjhtml", "junit"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [defaultBrowser],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      },
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
          '--headless',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9222',
          '--remote-debugging-address=0.0.0.0'
        ]
      }
    }
  });
};
