'use strict'

var gulp = require('gulp'),
    typescript = require('typescript'),
    ts = require('gulp-typescript'),
    browsersync = require('browser-sync').create(),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    $ = require('gulp-load-plugins'),
    cssnext = require('gulp-cssnext');

gulp.task('css', function(){
  gulp.src('src/**/*/.css')
    .pipe(cssnext({
      compress: true
    }))
    .pipe(gulp.dest('dis/css/'));
});

gulp.task('default', ['css']);
