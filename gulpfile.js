    
    // Include gulp
    var gulp = require('gulp'); 

    // Include Our Plugins
    var jshint = require('gulp-jshint');
    var rename = require('gulp-rename');
    var sass = require('gulp-sass');
    var cache = require('gulp-cache');
    var changed = require('gulp-changed');
    var watch = require('gulp-watch');
    var connect = require('gulp-connect');
    var livereload = require('gulp-livereload');
    var open = require('open');

    //var lib  = 'app/bower_components';

    // clean dist
    gulp.task('clean', function(){
        return gulp.src(['dist/*.html', 'dist/js', 'dist/css', 'dist/images'], { read: false })
            .pipe(clean()); 
    });

    //server
    gulp.task('webserver', function() {
        connect.server({
            livereload: true,
            port: 8080,
            root: ['app']
        });
    });

    //livereload
    gulp.task('livereload', function() {
        gulp.src(['app/*.html','app/styles/*.css', 'app/scripts/*.js'])
            .pipe(watch())
            .pipe(connect.reload());
    });

    //open app
    gulp.task('open', ['webserver'], function(){
        open('http://localhost:8080/');
    });

    // Lint Task
    gulp.task('lint', function() {
        return gulp.src('app/scripts/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    // Compile Our Sass
    gulp.task('sass', function() {
        return gulp.src('app/styles/sass/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/styles'));
    });

    // Watch Files For Changes
    gulp.task('watch', function() {
        gulp.watch('app/*.html');
        gulp.watch('app/scripts/*.js', ['lint']);
        gulp.watch('app/styles/sass/**/*.scss', ['sass']);
    });

    // Default Task
    gulp.task('default', ['lint', 'sass', 'open', 'livereload', 'watch']);

