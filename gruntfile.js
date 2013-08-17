'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'web/Gruntfile.js',
        'web/assets/js/*.js',
        '!web/assets/app.min.js'
      ]
    },
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'source/assets/css/app.min.css': [
            '_less/less/compile.less'
          ]
        }
      }
    },
    uglify: {
      dist: {
        options: {
        report: 'min',
      },
        files: {
          'source/assets/js/app.min.js': [
            // Jquery
            '_src/bower_components/jquery/jquery.js',
            // Bootstrap
            // App
            'assets/js/app.js'
          ]
        }
      }
    },
    watch: {
      less: {
        files: [
          // Plugins
          '_src/bower_components/bootstrap/less/*.less',
          // App
          '_src/less/app-variables.less',
          '_src/less/compile.less',
          '_src/less/app.less'
        ],
        tasks: ['recess']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      }
    },
    clean: {
      dist: [
        'source/assets/css/app.min.css',
        'source/assets/js/app.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'recess',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
