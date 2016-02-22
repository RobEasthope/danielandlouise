'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'web/Gruntfile.js',
        '_src/assets/js/*.js',
        'source/assets/js/app.min.js'
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
            '_src/less/compile.less'
          ]
        }
      }
    },
    concat: {
        options: {
            stripBanners: false
        },
        bootstrap: {
            src: [
            'bower_components/jquery/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/FitText.js/jquery.fittext.js',
            '_src/js/app.js'
            ],
            dest: '_src/js/grunt-build.js'
        }
    },
    uglify: {
      dist: {
        options: {
        report: 'min',
      },
        files: {
          'source/assets/js/app.min.js': [
            '_src/js/grunt-build.js'
          ]
        }
      }
    },
    watch: {
      less: {
        files: [
          // Plugins
          'bower_components/bootstrap/less/*.less',
          // App
          '_src/less/app-variables.less',
          '_src/less/compile.less',
          '_src/less/app.less'
        ],
        tasks: ['recess']
      },
      js: {
        files: [
          '_src/js/*.js'
        ],
        tasks: ['concat', 'uglify']
      }
    },
    clean: {
      dist: [
        '_src/js/grunt-build.js',
        'source/assets/css/app.min.css',
        'source/assets/js/app.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'recess',
    'concat',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
