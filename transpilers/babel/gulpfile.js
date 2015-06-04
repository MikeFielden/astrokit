/**
 * Libraries
 *
 **/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var run = require('run-sequence');

var arg = require('yargs').argv;

/**
 *  Folder structure looks like this on the container:
 *
 *  /src
 *      /app
 *          /app
 *              // LOOKS IN HERE FOR SERVER CODE
 *      /public
 *          /js
 *              // LOOKS IN HERE FOR CLIENT CODE
 *      /astro_code
 *          THIS PROJECT
 *              Dockerfile
 *              gulpfile.js
 *              package.json
 *
 **/
gulp.task('default', function () {

  // check for server only flag
  if (arg.server)
    return run('babel-server');

  // check for client only flag
  if (arg.client)
    return run('babel-client');


  // run both if no flags
  return run(['babel-server', 'babel-client']);

});



gulp.task('babel-server', function() {
  return gulp.src(['../app/app/**/*.js'])
  .pipe(plugins.babel())
  .pipe(gulp.dest('../app/dist'));
});

gulp.task('babel-client', function () {
    return gulp.src(['../app/public/js/**/*.js'])
    .pipe(plugins.babel())
    .pipe(gulp.dest('../app/public/dist/js'));
});

