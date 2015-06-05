/**
 * Libraries
 *
 **/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

/**
 * Settings
 **/
var paths = {
  client: '../app/public/',
  build: '../app/public/dist/'
};

var assets = {
  js: 'js/'
};

var files = {
  js: '**/*.js'
};

/**
 *  Folder structure looks like this on the container:
 *
 *  /src
 *      /public
 *        /dist
 *          /js
 *            // OUTPUT OF CONCAT AND MIN GO HERE
 *        /js
 *          // LOOKS IN HERE FOR JS TO CONCAT/MIN
 *      /astro_code
 *          THIS PROJECT
 *              Dockerfile
 *              gulpfile.js
 *              package.json
 **/

gulp.task('default', function () {
  var searchSlug = paths.client + assets.js + files.js;

  return gulp.src(searchSlug)
    .pipe(plugins.filelog())
    .pipe(plugins.plumber())
    .pipe(plugins.concat('app.js'))
    .on('error', plugins.util.log)
    .pipe(plugins.size({"showFiles": true}))
    .pipe(gulp.dest(paths.build + assets.js))
    .pipe(plugins.uglify())
    .on('error', plugins.util.log)
    .pipe(plugins.rename({suffix: '.min'}))
    .on('error', plugins.util.log)
    .pipe(plugins.size({"showFiles": true}))
    .pipe(gulp.dest(paths.build + assets.js))
    .pipe(plugins.duration('Task duration'));
});