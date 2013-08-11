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
          'assets/app.min.css': [
            'assets/less/compile.less'
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
          'assets/app.min.js': [
            // Jquery
            '/_lib/bower_components/jquery/jquery.js',
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
          '/_lib/bower_components/bootstrap/less/*.less',
          // App
          '/assets/less/app.less'
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
        '/assets/main.min.css',
        '/assets/app.min.js'
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