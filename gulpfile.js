'use strict';

var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    tap     = require('gulp-tap'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename'),
    path    = require('path');

function printFileInfo(file) {
    var content = (file.contents || '').toString();
    console.log('file:', path.basename(file.path), 'content-length: ', content.length);
}

gulp.task('default', function () {
    return gulp.src('src/app/**/*.js')
        .pipe(tap(printFileInfo))
        .pipe(concat('scripts.js'))
        .pipe(tap(printFileInfo))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(tap(printFileInfo));
});
