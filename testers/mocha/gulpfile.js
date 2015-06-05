/**
 * Libraries
 *
 **/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var globals = require('./setup/globals.json');
var isparta = require('isparta');


// docker run -t -e "COVERAGE=true" -v $(pwd):/src/app IMAGENAME
// docker run -t -v $(pwd):/src/app cover_me IMAGENAME

var run = require('run-sequence');

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

gulp.task('default', function () {


	// if coverage env variable is provided run with instabul
	if (process.env.COVERAGE) {
		return run('coverage');
	}

	// if not  run just mocha
	return run('test');
});

gulp.task('coverage', function (done) {
	require('babel/register')({ modules: 'common' });
	gulp.src(['../app/app/**/*.js', '../app/public/js/**/*.js'])
		.pipe(plugins.istanbul({ instrumenter: isparta.Instrumenter }))
		.pipe(plugins.istanbul.hookRequire())
		.on('finish', function() {
			return test()
			.pipe(plugins.istanbul.writeReports())
			.on('end', done);
		});
});

gulp.task('test', function (done) {
	require('babel/register')({ modules: 'common' });
	return test();
});


function test() {
	return gulp.src(['./setup/node.js', '../app/test/**/*.js'], {read: false})
	.pipe(plugins.filelog())
	.pipe(plugins.mocha({reporter: 'spec', globals: globals}))
	.on('error', plugins.util.log)
	.pipe(plugins.duration('testing server files...'));
};
