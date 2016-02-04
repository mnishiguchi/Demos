# Gulp
- https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
- https://css-tricks.com/gulp-for-beginners/
- http://qiita.com/kazukichi/items/884a1379eea5918689ed
- http://stackoverflow.com/questions/28189177/best-way-to-concat-and-uglify-js-in-gulp
- [めんどくさいことはgulpで自動化しよう](http://qiita.com/roana0229/items/1fcf301b7c5f2f2ede0e)
- https://github.com/roana0229/gulp-template-web/blob/master/gulpfile.js
- [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [gulp + coffeescriptでお気楽フロント開発環境構築](http://qiita.com/ino-shin/items/9b5dd7c08d9a31cb773d)

```
"sass/style.scss"
#==> sass/style.scssだけヒット

"sass/*.scss"
#==> sassディレクトリ直下にあるscssがヒット

"sass/**/*.scss"
#==> sassディレクトリ以下にあるすべてのscssがヒット

["sass/**/.scss","!sass/sample/**/*.scss"]
#==> sass/sample以下にあるscssを除くsassディレクトリ以下のscssがヒット
```

```js
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


```
