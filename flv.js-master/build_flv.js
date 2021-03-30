'use strict';

const del = require('del');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');
const browserify = require('browserify');
const watchify = require('watchify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const fs = require('fs')

let b = browserify({
    entries: 'src/index.js',
    standalone: 'flvjs',
    debug: true,
    transform: ['babelify', 'browserify-versionify'],
    plugin: ['browserify-derequire']
});

b.bundle().on('error', console.error.bind(console))
.pipe(fs.createWriteStream('./dist/flv.js'))