/**
 * Libraries
 *
 **/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function () {
    /**
     *  Folder structure looks like this on the container:
     *
     *  /src
     *      /app
     *          // LOOKS IN HERE FOR JS
     *      /astro_code
     *          THIS PROJECT
     *              Dockerfile
     *              gulpfile.js
     *              package.json
     *
     **/
    return gulp.src(['../app/**/*.js', '!../**/node_modules/**/*.js'])
        .pipe(plugins.filelog())
        .pipe(plugins.jshint({
            esnext: true
        }))
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.duration('Linting files...'));
});
