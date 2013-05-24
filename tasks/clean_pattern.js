/*
 * clean-pattern
 * https://github.com/stephaniedrevet/plugin
 *
 * Copyright (c) 2013 Stephanie DREVET STACUL
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('clean-pattern', 'Remove files that match a pattern.', function() {
	//clean files matching a pattern

			var fs = require("fs"),
		    _path = require("path");

			var data = this.data;

			var fileList = [];
			var path = data.path;
			var pattern = data.pattern;
			var readdirSyncRecursive = function(baseDirectory, pat) {
				var files = [],
				curFiles,
				matchPattern = function(fname) {
		            return fname.match(pat);
		        };
		        curFiles = fs.readdirSync(baseDirectory);
		        curFiles = curFiles.filter(matchPattern);
		        files = files.concat( curFiles);
		        return files;
			};
			path = path.replace(/\/$/, '');
			fileList = fileList.concat(readdirSyncRecursive(path, pattern));
			for (val in fileList) {
			    var currentFile = fileList[val];
			    currentFile = _path.join(path, currentFile);
			    fs.unlinkSync(currentFile);
			};
  });

};
