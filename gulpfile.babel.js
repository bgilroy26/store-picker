"use strict";

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task("default", () => {
    return browserify("src/index.js")
        .transform("babelify")
        .bundle()
        .pipe(source("index.js"))
        .pipe(gulp.dest("dist"));
});
