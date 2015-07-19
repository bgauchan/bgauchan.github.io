
var gulp = require('gulp');
var less = require('gulp-less');
var ejs = require('gulp-ejs');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css');

 // for debugging, lets chrome & firefox know the css line number of the original file
 // e.g. -> line 22 of header.less (instead of the main giant style.css file)
var sourcemaps = require('gulp-sourcemaps');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin'); // for image optimization

var plumber = require('gulp-plumber'); // for error notification
var notify = require('gulp-notify'); // for error notification

gulp.task('less', function () {

   gulp.src('./less/style.less')
    .pipe(sourcemaps.init())
      .pipe(plumber(plumberErrorHandler))
      .pipe(less())
      .pipe(concat("style.css"))
      .pipe(minifyCSS())
    .pipe(sourcemaps.write())
      .pipe(gulp.dest('./'));

});

gulp.task('templates', function() {
  gulp.src('./templates/*.ejs')
    .pipe(ejs().on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

var plumberErrorHandler = { errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

gulp.task('watch', function() {
  gulp.watch('less/*.less', ['less']);
  gulp.watch('./templates/*.ejs', ['templates']);
});

gulp.task('default', ['less', 'templates', 'watch']);
