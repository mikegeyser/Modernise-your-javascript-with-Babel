module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    karma: {
      unit: {
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        singleRun: true,
        reporters: ['progress'],
        options: {
          files: ['dest/**/*.js']
        }
      }
    },
    "babel": {
      options: {
        // sourceMap: true
      },
      dist: {
        files: [{
          "expand": true,
          "cwd": "src/",
          "src": ["*.js"],
          "dest": "dest/",
          "ext": ".js"
        }]
      }
    }
  });

  grunt.registerTask("default", ["babel", "karma:unit"]);
};
