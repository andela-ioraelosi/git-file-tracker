// Karma configuration
// Generated on Tue Mar 24 2015 16:42:40 GMT+0100 (WAT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './libs/angular/angular.js',
      './libs/angular-mocks/angular-mocks.js',
      './libs/angular-route/angular-route.js',
      './libs/satellizer/satellizer.js',
      './libs/sloc-bower/sloc.js',
      './libs/base-64/base64.js',
      './libs/angular-chartist.js/dist/angular-chartist.js',
      './app/core/core.module.js',
      './app/core/services/login.service.js',
      './app/core/controllers/login.controller.js',
      './tests/unit/core/services/**/*.js',
      './tests/unit/core/controllers/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './app/core/core.module.js': ['coverage'],
        './app/core/services/*.js': ['coverage'],
        './app/core/controllers/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
