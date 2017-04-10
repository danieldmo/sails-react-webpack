module.exports = function(grunt) {
  grunt.config.set('mocha_istanbul', {
    options: {
      mochaOptions: ['-b']
    },
    coverage: {
      src: 'api/unit-tests', // the folder, not the files
      options: {
        coverageFolder: 'coverage-api',
        // mask: '**/ProjectController.test.js',
        // mask: '**/BrandAnalysisController.test.js',
        mask: '**/*.test.js',
        root: 'api/',
        istanbulOptions: ['-x responses']
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');

};
