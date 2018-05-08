var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('one', function(){
    return gulp.src('stylus/main.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    return gulp.watch('stylus/*.styl', ['one'])
});