const gulp = require("gulp"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create(),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  postcss = require("gulp-postcss"),
  cleanCSS = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  imagemin = require("gulp-imagemin"),
  changed = require("gulp-changed"),
  uglify = require("gulp-uglify"),
  lineec = require("gulp-line-ending-corrector");

// The server function called later
function serve(done) {
  browserSync.init({
    server: {
      baseDir: "./src",
      index: "/index.html"
    },
    port: 3000
  });
  done();
}

//The server function to reload
function reload(done) {
  browserSync.reload();
  done();
}

function jsTask() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(gulp.dest("src/dist/js"))

    .pipe(browserSync.stream());
}

//compile sass
function style() {
  var processors = [autoprefixer, cssnano];
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors)) /*add*/ // PostCSS plugins
    .pipe(cleanCSS())
    .pipe(sourcemaps.write()) // write sourcemaps file in current directory
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch("src/scss/**/*.scss", gulp.series(style, reload));
  gulp.watch("src/js/**/*.js", gulp.series(jsTask, reload));
  gulp.watch("src/*.html", reload);
}

//Compiling & Moving stylesheets & Scripts
var files = gulp.parallel(style, jsTask);
//Building task
var build = gulp.series(files, gulp.parallel(serve, watch));
gulp.task(build);
gulp.task("default", build);
