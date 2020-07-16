var gulp = require( 'gulp' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    browserSync  = require( 'browser-sync' ).create(),
    reload  = browserSync.reload,
    sass  = require( 'gulp-sass' ),
    cleanCSS  = require( 'gulp-clean-css' ),
    sourcemaps  = require( 'gulp-sourcemaps' ),
    concat  = require( 'gulp-concat' ),  
    uglify  = require( 'gulp-uglify' ),
    babel  = require( 'gulp-babel' ),
    lineec  = require( 'gulp-line-ending-corrector' );

var scss  = './sass/',
    js  = './js/',
    jsdist  = '';

// Watch Files

var PHPWatchFiles  = './*.html',
    PHPWatchFiles2  = './*.js',
    styleWatchFiles  = 'sass/*.scss';

// Used to concat the files in a specific order.
var jsSRC = [ 
  'assets/js/main.mins.js' 
];

// Used to concat the files in a specific order.
var cssSRC =  [  
	'assets/css/compiled.css', /** For sass */
];
 
function css() {
  return gulp.src([scss + 'compiled.scss'])
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(lineec())
  .pipe(gulp.dest('./assets/css/'));
}

function concatCSS() {
  return gulp.src(cssSRC)
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
  .pipe(concat('style.css'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('./maps/'))
  .pipe(lineec())
  .pipe(gulp.dest('.'));
}

function mainBabel () {
  return  gulp.src('assets/js/main.js')
  .pipe(babel({
      presets: ['@babel/env']
  }))
  .pipe(concat('main.mins.js'))
  .pipe(gulp.dest('./assets/js/'));
}
function javascript() {
  return gulp.src(jsSRC) 
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
  .pipe(concat('App.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('./maps/'))
  .pipe(lineec())
  .pipe(gulp.dest('.'));
}
 

function watch() {
  browserSync.init({
    open: 'external',
    proxy: 'http://localhost/es6firebasetodo',
    port: 3000,
  });
  gulp.watch(styleWatchFiles, gulp.series([css, concatCSS])).on('change', browserSync.reload);
  gulp.watch('assets/js/main.js', mainBabel).on('change', browserSync.reload);
  gulp.watch(jsSRC, javascript).on('change', browserSync.reload);  
  gulp.watch([PHPWatchFiles, PHPWatchFiles2 , 'main.min.js', 'style.css']).on('change', browserSync.reload);
}

exports.css = css;
exports.concatCSS = concatCSS;
exports.mainBabel = mainBabel;
exports.javascript = javascript;
exports.watch = watch; 

var build = gulp.parallel(watch);
gulp.task('default', build);