const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const clean = require('gulp-clean')
const inlinesource = require('gulp-inline-source')

const htmlminConfig = {
  collapseWhitespace: true,
  minifyCSS: true
}

gulp.task('clean-dist', function () {
  return gulp.src('dist', { read: false })
    .pipe(clean())
})

gulp.task('minify', ['clean-dist'], function () {
  return gulp.src('src/index.html')
    .pipe(inlinesource())
    // .pipe(htmlmin(htmlminConfig))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['minify'])
