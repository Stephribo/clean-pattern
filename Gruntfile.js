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
	}

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  // Example of default task: clean files in the scripts directory matching the 
  // pattern /(\d{6})(.min)?.js/
  grunt.registerTask('default', ['clean-pattern:scripts']);

};
