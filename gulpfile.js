const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./Client/Static/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] }))
    .pipe(gulp.dest('./Client/Static/css'))
    .pipe(browserSync.stream());
})

gulp.task('watch', () => {
  // BrowserSync settings
  browserSync.init({
    proxy: 'http://localhost:3000',
    files: './Client/Static/css/styles.css',
  });

  gulp.watch('./Client/Static/scss/styles.scss', ['sass'])
    .on('change', (event) => {
      console.log(`File ${event.path} was ${event.type} , running tasks...`);
    });
});

gulp.task('frontend', ['sass', 'watch']);