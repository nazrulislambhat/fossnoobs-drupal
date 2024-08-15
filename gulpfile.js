const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// Paths
const paths = {
  styles: {
    src: 'scss/**/*.scss',
    dest: 'css'
  }
};

// Compile SCSS to CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch files
function watch() {
  gulp.watch(paths.styles.src, styles);
}

// Define tasks
const build = gulp.series(styles);
const dev = gulp.series(styles, watch);

exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = dev;
