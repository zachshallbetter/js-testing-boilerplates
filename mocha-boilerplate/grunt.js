/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'tests/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    mocha: {
      index: [ 'runner/index.html' ]
    }
  });

  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadTasks('tasks');

  grunt.registerTask('test', 'gatherTests mocha');
  grunt.registerTask('default', 'lint test');
};
