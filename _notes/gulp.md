# Gulp
- https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
- https://css-tricks.com/gulp-for-beginners/
- http://qiita.com/kazukichi/items/884a1379eea5918689ed
- http://stackoverflow.com/questions/28189177/best-way-to-concat-and-uglify-js-in-gulp
- [めんどくさいことはgulpで自動化しよう](http://qiita.com/roana0229/items/1fcf301b7c5f2f2ede0e)
- https://github.com/roana0229/gulp-template-web/blob/master/gulpfile.js
- [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)

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
