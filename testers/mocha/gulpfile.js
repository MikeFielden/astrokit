/**
 * Libraries
 *
 **/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var globals = require('./setup/globals.json');

gulp.task('default', function () {
    /**
     *  Folder structure looks like this on the container:
     *
     *  /src
     *      /app
     *          /test
     *              // LOOKS IN HERE FOR TESTS
     *      /astro_code
     *          THIS PROJECT
     *              Dockerfile
     *              gulpfile.js
     *              package.json
     *
     **/
    require('babel/register')({ modules: 'common' });
    return gulp.src(['./setup/node.js', '../app/test/**/*.js'], {read: false})
    .pipe(plugins.mocha({reporter: 'spec', globals: globals}))
    .on('error', plugins.util.log);
});
