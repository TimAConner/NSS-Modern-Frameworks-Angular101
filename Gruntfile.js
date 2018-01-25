module.exports = function(grunt) {
    grunt.initConfig({
      browserify: {
        files: {
          src: 'app/main.js',
          dest: 'dist/app.js'
        },
        options: {
          transform: ['hbsfy'],
        }
      },
      jshint: {
        files: ['app/**/*.js'],
        options: {
          predef: ["document", "console"],
          esnext: true,
          globalstrict: true,
          globals: {},
          browserify: true
        }
      },
      watch: {
        javascripts: {
          files: ['app/**/*.js'],
          tasks: ['jshint', 'browserify']
        },
        hbs: {
          files: ['templates/**/*.hbs']
        }
      }
    });
  
    require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
  };