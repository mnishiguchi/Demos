"use strict";

/**
 * Defines Gulp tasks for this project.
 * https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
 */
var gulp   = require( "gulp" );
var minJs  = require( "gulp-uglify" );
var minCss = require( 'gulp-minify-css' );
var rename = require( "gulp-rename" );
// var concat = require( "gulp-concat" );
var gulpUtil = require('gulp-util');

  // gulpUtil.log('Hello!!!')

/**
 * Declare the default tasks.
 */
gulp.task( "default", [
  "build_js" ,
  "build_css",
  "watch"
]);


/**
 * Builds js files in the project.
 */
gulp.task( "build_js", function() {

  gulp.src( [ "app.js" ] ) // Read the files

    .pipe( minJs() )                        // Minify
    // .pipe( concat('app.js') )            // Concat all to app.js
    .pipe( rename({ extname: ".min.js" }) ) // Rename to app.min.js
    .pipe( gulp.dest( "build" ) )           // Write minified to disk

});


/**
 * Builds css files in the project.
 */
gulp.task( "build_css", function() {

  gulp.src( [ "app.css" ] ) // Read the files

    .pipe( minCss() )                         // Minify
    // .pipe( concat('app.css') )             // Concat all to app.css
    .pipe( rename({ extname: ".min.css" }) )  // Rename to app.min.css
    .pipe( gulp.dest( "build" ) )             // Write minified to disk

});


/**
 * Configures which files to watch and what tasks to use on file changes.
 */
gulp.task( 'watch', function() {

  gulp.watch( "app.js",  [ 'build_js' ] );
  gulp.watch( "app.css", [ 'build_css' ] );

});
