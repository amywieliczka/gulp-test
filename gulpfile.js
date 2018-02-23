var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('hello', function() {
    console.log('hello world');
});

// watch bower.json, js, jstest, sass, scss, css
// live reload html, css, images
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
})

// spin up a web server for web dev
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})


// empty dist folder?

// jshint

// mocha testing framework?

// compile sass to css
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// add vendor prefixed styles

// inject bower components into index.html file

// rename files for browser caching purposes

// minify images, svg, html

// concatenation?

// copy files

// modernizr ??
