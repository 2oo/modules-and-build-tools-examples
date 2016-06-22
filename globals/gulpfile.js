var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('default', () =>
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'math/add.js',
        'math/multiply.js',
        'app.js'
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
);
