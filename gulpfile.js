/*jshint esversion: 6 */

const gulp   = require('gulp');
const uglify = require("gulp-uglify-es").default;
const sass   = require("gulp-sass");
const pug    = require("gulp-pug");
const sync   = require("browser-sync").create();
const concat = require("gulp-concat");

gulp.task("js", function (cb) {
    return gulp.src([
            'node_modules/turbolinks/dist/turbolinks.js',
            'node_modules/jquery/dist/jquery.js',
            // 'node_modules/popper.js/dist/popper.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            "src/js/**/*.js"
        ])
        .pipe(concat('payplux.js'))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"));
});

gulp.task('css', function () {
    return gulp
        .src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './src/css/**/*.scss'
        ])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('payplux.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('pug', function() {  
    return gulp.src('./src/html/views/**/*.pug')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.parallel(['css', 'js', 'pug']));

gulp.task('serve', function() {
    // sync.init({
    //     server: "./dist"
    // });

    gulp.watch("./src/js/**/*.js", gulp.parallel(['js']));
    gulp.watch("./src/css/**/*.scss", gulp.parallel(["css"]));
    gulp.watch("./src/html/**/*.pug", gulp.parallel(["pug"]));
});