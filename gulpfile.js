'use strict';

var gulp = require('gulp'),
    through   = require('through'),
    path    = require('path');

function printFileInfo(file) {
    var content = (file.contents || '').toString();
    console.log('file:', path.basename(file.path), 'content-length: ', content.length);
}

gulp.task('read-js-content', function () {
    gulp.src('src/app/**/*.js')
        .pipe(through(printFileInfo));
});

gulp.task('read-js-no-content', function () {
    gulp.src('src/app/**/*.js', { read: false })
        .pipe(through(printFileInfo));
});
