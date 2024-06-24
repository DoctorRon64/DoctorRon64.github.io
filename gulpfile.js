import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import concat from 'gulp-concat';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import postcss from 'gulp-postcss';
import replace from 'gulp-replace';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser';
import pump from 'pump';
import * as dartSass from 'sass';
import { copyPlugins, copySnippets, modx, modxtemplates } from './gulptasks/modx.js';

const { src, dest, watch, series, parallel } = gulp;
const browser = browserSync.create();
const sass = gulpSass(dartSass);

const files = {
  scssPath: 'src/assets/scss/**/*.scss',
  jsPath: 'src/assets/js/**/*.js',
  htmlPath: 'src/html/**/*.html',
  imgPath: 'src/assets/img/**/*.{jpg,jpeg,png,svg,gif}',
  audioPath: 'src/assets/audio/**/*.{mp3,ogg,wav,flac}',
  modxSrc: 'src/modx/',
  modxDest: 'modx/',
};

function scssTask(cb) {
  return src(files.scssPath, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'compressed', includePaths: ['node_modules'] }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('docs/assets/css/', { sourcemaps: '.' }))
    .pipe(dest('modx/assets/css/', { sourcemaps: '.' }))
    .on('end', cb);
}

function jsTask(cb) {
  return src(files.jsPath, { sourcemaps: true })
    .pipe(concat('app.js'))
    .pipe(terser())
    .pipe(dest('docs/assets/js/', { sourcemaps: '.' }))
    .pipe(dest('modx/assets/js/', { sourcemaps: '.' }))
    .on('end', cb);
}

const imageminOptions = {
  maxBuffer: 1024 * 1024 * 10,
  plugins: [
    gifsicle({ interlaced: true }),
    mozjpeg({ quality: 75, progressive: true }),
    optipng({ optimizationLevel: 5 }),
    svgo({
      plugins: [
        {
          name: 'removeViewBox',
          active: true
        },
        {
          name: 'cleanupIDs',
          active: false
        }
      ]
    })
  ]
};


function imgTask(cb) {
  return new Promise((resolve, reject) => {
    const stream = src(files.imgPath, { encoding: false });

    pump(
      [
        stream,
        imagemin(imageminOptions),
        dest('docs/assets/img/')
      ],
      (error) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve();
        }
        cb();
      }
    );
  });
}

gulp.task('images', imgTask);
gulp.task('modx', gulp.series(modx, modxtemplates, copySnippets, copyPlugins));

function htmlTask(cb) {
  return src(files.htmlPath)
    .pipe(dest('docs/'))
    .on('end', cb);
}

function audioTask(cb) {
  return src(files.audioPath, { encoding: false })
    .pipe(dest('docs/assets/audio/'))
    .pipe(dest('modx/assets/audio/'))
    .on('end', cb);
}

function cacheBustTask(cb) {
  var cbString = new Date().getTime();
  return src(['src/html/index.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('docs/'))
    .on('end', cb);
}

function browserSyncServe(cb) {
  browser.init({
    server: {
      baseDir: 'docs/',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
}

function browserSyncReload() {
  browser.reload();
}

function watchTask(cb) {
  watch(files.scssPath).on('all', gulp.series(scssTask, browserSyncReload));
  watch(files.jsPath).on('all', gulp.series(jsTask, browserSyncReload));
  watch(files.htmlPath).on('all', gulp.series(htmlTask, cacheBustTask, browserSyncReload));
  watch(files.imgPath).on('all', gulp.series('images', browserSyncReload));
  watch(files.audioPath).on('all', gulp.series(audioTask, browserSyncReload));
  watch('docs/**/*.html').on('all', browserSyncReload);
  gulp.watch(files.modxSrc + 'staticScripts/templates/**/*.html').on('all', gulp.series(modxtemplates, browser.reload));
  gulp.watch(files.modxSrc + 'staticScripts/snippets/**/*.php').on('all', gulp.series(copySnippets));
  gulp.watch(files.modxSrc + 'staticScripts/chunks/**/*.html').on('all', gulp.series(modx));
  gulp.watch(files.modxSrc + 'staticScripts/plugins/**/*.php').on('all', gulp.series(copyPlugins));
  cb();
}

export default series(
  parallel(scssTask, jsTask, htmlTask, 'modx', 'images', audioTask),
  cacheBustTask,
  browserSyncServe,
  watchTask
);