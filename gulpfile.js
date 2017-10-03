const nodemon = require('gulp-nodemon');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
// const webpackDevServer = require('webpack-dev-server');
const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const Promise = require('bluebird');
const path = require('path');

const webpackConfig = require('./webpack.config');
const SRC_DIR = path.resolve(__dirname, 'Client/src');


// NODEMON //
gulp.task('nodemon', () => {
  const stream = nodemon({
    script: 'Server/server.js',
    watch: ["Server/**"],
    ignore: ["Client/**"]
  });
});


// WEBPACK //
gulp.task('webpack', (callback) => {
  gulp.src('./Client/src/index.js')
  .pipe(webpackStream(webpackConfig), webpack)
  .pipe(gulp.dest('./Client/Static'));
})


// SASS - WATCH //
gulp.task('sass', () => {
  return gulp.src('./Client/Static/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] }))
    .pipe(gulp.dest('./Client/Static/css'))
    .pipe(browserSync.stream());
})

gulp.task('watch', () => {
  setTimeout(() => {
    browserSync.init({
      proxy: 'http://localhost:3000',
      files: './Client/Static/css/styles.css',
    });

    gulp.watch('./Client/Static/scss/styles.scss', ['sass'])
      .on('change', (event) => {
        console.log(`File ${event.path} was ${event.type} , running tasks...`);
      });
  }, 2000)
});

gulp.task('frontend', ['sass', 'watch']);


// DEFAULT GULP //
gulp.task('default', ['nodemon', 'webpack', 'frontend']);













// WEBPACK-DEV //
// gulp.task('webpack-dev', (callback) => {
//   const compiler = webpack(webpackConfig);

//   new webpackDevServer(compiler, {
//     contentBase: "./Client/Static",
//     publicPath: "/",
//     hot: true,
//     inline: true,
//     stats: true,
//     historyApiFallback: true
//   }).listen(8080, "localhost", (err) => {
//     if (err) throw new gutil.PluginError("webpack-dev-server", err);
//     gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
//   })
// })