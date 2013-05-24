/*
 * clean-pattern
 * https://github.com/stephaniedrevet/plugin
 *
 * Copyright (c) 2013 Stephanie DREVET STACUL
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).

    "clean-pattern": {
    	/** remove files like toto120513.css or toto110614.min.css*/
		'cssWithDatePattern': {path:"test/fixtures/", pattern:/(\d{6})(.min)?.css/},
		/** remove files like totoXXXXXX.css or totoXXXXXX.min.css*/
		'cssXXXXXX': {path:"test/fixtures/css", pattern:/XXXXXX(.min)?.css/},
		/** remove files like toto120513.js or toto110614.min.js*/
		'scripts':{path:"test/fixtures/scripts/", pattern:/(\d{6})(.min)?.js/},
		/** remove files like totomobile120406.js or totomobileCV120406.js or 
		 * totomobile120406.min.js ...*/
		'mobileScripts':{path:"test/fixtures/scripts/", pattern:/(mobile|mobileCV)+(\d{6})(.min)?.js/}
	},

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'clean-pattern', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
