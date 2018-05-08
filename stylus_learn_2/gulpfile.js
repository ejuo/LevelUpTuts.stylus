var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');
var rupture = require('rupture');

gulp.task('styles', function() {
    gulp.src('style.styl')
        .pipe(stylus({
            use: [typographic(), nib(), rupture()]
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch:styles', function(){
    gulp.watch('**/*.styl', ['styles'])
})