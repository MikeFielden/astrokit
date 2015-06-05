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
  img: 'images/'
};

var files = {
  all: '**/*.*'
};

/**
 *  Folder structure looks like this on the container:
 *
 *  /src
 *      /public
 *        /dist
 *          /images
 *          // OUTPUT OF IMAGES GO HERE
 *        /images
 *              // LOOKS IN HERE FOR IMAGES
 *      /astro_code
 *          THIS PROJECT
 *              Dockerfile
 *              gulpfile.js
 *              package.json
 **/

/**
 * Simple image optimization technique
 */
gulp.task('default', function () {
  return gulp.src(paths.client + assets.img + files.all)
            .pipe(plugins.filelog())
            .pipe(plugins.imagemin())
            .pipe(gulp.dest(paths.build + assets.img))
            .pipe(plugins.duration('Task duration'));
});