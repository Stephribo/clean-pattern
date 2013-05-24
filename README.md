# clean-pattern

> A task to remove files which name matches a given pattern.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install clean-pattern --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('clean-pattern');
```

## The "clean-pattern" task

### Overview
In your project's Gruntfile, add a section named `clean-pattern` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "clean-pattern": {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Usage Examples

  // Project configuration.
  grunt.initConfig({
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


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

