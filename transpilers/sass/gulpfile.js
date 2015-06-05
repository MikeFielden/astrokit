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
  build: '../app/public/dist/css'
};

var assets = {
  css: 'sass/'
};

var files = {
  css: '**/*.scss'
};

/**
 * Compiles scss using libsass (super fast)
 * Autoprefixes the result
 * Display size
 * Output full file
 * Minify the css file
 * Rename it
 * Output the minified version
 */
gulp.task('default', function () {
    /**
     *  Folder structure looks like this on the container:
     *
     *  /src
     *      /app
     *          /public
     *            /dist
     *              /css
     *                // OUTPUT GOES HERE
     *            /sass
     *             // LOOKS IN HERE FOR SASS
     *      /astro_code
     *          THIS PROJECT
     *              Dockerfile
     *              gulpfile.js
     *              package.json
     **/
    return gulp.src(paths.client + assets.css + files.css)
      .pipe(plugins.filelog())
      .pipe(plugins.plumber())
      .pipe(plugins.sass())
      .on('error', plugins.util.log)
      .pipe(plugins.autoprefixer())
      .pipe(plugins.size({"showFiles":true}))
      .pipe(gulp.dest(paths.build + '/'))
      .pipe(plugins.minifyCss())
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(plugins.size({"showFiles":true}))
      .pipe(gulp.dest(paths.build + '/'))
      .pipe(plugins.duration('Task duration'));
});