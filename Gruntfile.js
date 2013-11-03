module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        'test/spec/**/*.js'
      ]
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
        tasks: ['uglify'],
      }
    },

    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          base: '.',
          livereload: true,
          open: 'http://0.0.0.0:9000/examples/'
        }
      }
    },

    uglify: {
      build: {
        src: 'lib/index.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Build
  grunt.registerTask('build', [
    'jshint',
    'uglify'
  ]);

  // Default task.
  grunt.registerTask('default', ['build']);
  grunt.registerTask('server', ['build', 'connect', 'watch']);
};
