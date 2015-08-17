'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('task1', function (cb) {
    setTimeout(cb, 1000);
    console.log('task1 started');
});

gulp.task('task2', function (cb) {
    setTimeout(cb, 1000);
    console.log('task2 started');
});

gulp.task('parallel', ['task1', 'task2'], function () {
    console.log('parallel task started.');
});

gulp.task('sequence', function (done) {
    runSequence('task1', 'task2', done);
});
