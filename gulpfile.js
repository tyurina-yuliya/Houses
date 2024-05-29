'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

exports.default = function () {
    return gulp.src('./src/styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
};

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.series('default'));
};