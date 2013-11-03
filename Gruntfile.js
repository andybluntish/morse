'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      name: 'morse'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        'examples/**/*.js',
        '!examples/scripts/vendor/**/*.js',
        'test/spec/**/*.js'
      ]
    },

    browserify: {
      build: {
        src: 'lib/index.js',
        dest: 'build/<%= config.name %>.js'
      },
      options: {
        standalone: '<%= config.name %>'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['examples/**/*.html']
      },
      scripts: {
        files: ['lib/**/*.js'],
        tasks: ['build']
      }
    },

    connect: {
      all: {
        options:{
          port: 9000,
          hostname: '0.0.0.0',
          base: '.',
          livereload: true,
          open: 'http://0.0.0.0:9000/examples/'
        }
      }
    },

    uglify: {
      build: {
        src: 'build/<%= config.name %>.js',
        dest: 'build/<%= config.name %>.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Build
  grunt.registerTask('build', [
    'jshint',
    'browserify:build',
    'uglify'
  ]);

  // Server
  grunt.registerTask('server', [
    'build',
    'connect',
    'watch'
  ]);

  // Default task.
  grunt.registerTask('default', ['build']);
};
