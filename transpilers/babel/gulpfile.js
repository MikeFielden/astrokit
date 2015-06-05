/**
 * Libraries
 *
 **/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var run = require('run-sequence');

// WILL RUN SERVER ONLY - docker run -t -e "SERVER=true" -v $(pwd):/src/app IMAGENAME
// WILL RUN ClENT ONLY - docker run -t -e "SERVER=true" -v $(pwd):/src/app IMAGENAME
// WILL RUN BOTH - docker run -t -v $(pwd):/src/app cover_me IMAGENAME

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
  if (process.env.SERVER)
    return run('babel-server');

  // check for client only flag
  if (process.env.CLIENT)
    return run('babel-client');


  // run both if no flags
  return run(['babel-server', 'babel-client']);

});



gulp.task('babel-server', function() {
  return gulp.src(['../app/app/**/*.js'])
  .pipe(plugins.filelog())
  .pipe(plugins.babel())
  .pipe(gulp.dest('../app/dist'))
  .pipe(plugins.duration('Babel-ing server files...'));
});

gulp.task('babel-client', function () {
    return gulp.src(['../app/public/js/**/*.js'])
    .pipe(plugins.filelog())
    .pipe(plugins.babel())
    .pipe(gulp.dest('../app/public/dist/js'))
    .pipe(plugins.duration('Babel-ing client files...'));
});

