/**
 * @author Lefthandmedia <ralph@lefthandmedia.com>
 *   GULP script to parse Foundations panini files to MDX chunks
 *   v1.0 15/7/2019
 */

import log from 'fancy-log';

import gulp from 'gulp';
import replace from 'gulp-replace';

const files = {
  scssPath: 'src/assets/scss/**/*.scss',
  jsPath: 'src/assets/js/**/*.js',
  htmlPath: 'src/html/**/*.html',
  imgPath: 'src/assets/img/**/*.{jpg,jpeg,png,svg,gif}',
  audioPath: 'src/assets/audio/**/*.{mp3,ogg,wav,flac}',
  modxSrc: 'src/modx/',
  modxDest: 'modx/',
};

// const gutil = require('gulp-util');

function splitstring(str) {
  let res = str.split(".");
  let r = res[res.length - 1];
  return r;
}

// Build the site, run the server, and watch for file changes
function parsepropertie(name, v) {
  console.log('parsepropertie', name, v);
  let r = '';
  let value = '';

  if (v) {
    value = v.replace(/'/g, '').trim();
    r = " &" + name + "=`" + splitstring(value) + "` ";
    if (value.indexOf('placeholder.') > -1) {
      value = value.slice(12).trim();
      r = ` &${name}=\`[[+${splitstring(value)}]]\` `;
    } else if (value.indexOf('tv.') > -1) {
      value = value.slice(3).trim();
      r = ` &${name}=\`[[*${splitstring(value)}]]\``;
    } else if (value.indexOf('setting.') > -1) {
      value = value.slice(8).trim();
      r = ` &${name}=\`[[++${splitstring(value)}]]\``;
    }
  }
  return r + "\n";
}


// Parse Ffrontmatter
function parseFM(match, pl) {
  return `<!-- ${match} --->`;
}

function parsemodx(match, pl) {
  let elementname = '';
  let prefix = '+';
  let cache = '';
  let properties = '';

  if (match.indexOf('{{#if') >= 0) {
    return `<!--  ${match}  -->`;
  } else if (match.indexOf('{{else') >= 0) {
    return `<!--  ${match}  -->`;
  } else if (match.indexOf('{{/') >= 0) {
    return `<!-- end ${match} -->`;
  } else if (match.indexOf('{{#') >= 0) {
    return `<!--  ${match}  -->`;
  } else if (match.indexOf('{{!') >= 0) {
    return `<!--  ${match}  -->`;
  } else if (match.indexOf('{{tv') >= 0) {
    prefix = '*'
  } else if (match.indexOf('{{>') >= 0) {
    prefix = '$'
  } else if (match.indexOf('{{setting') >= 0) {
    prefix = '++'
  } else if (match.indexOf('{{placeholder') >= 0) {
    prefix = '+'
  }

  // pl = pl.replace(/\r?\n|\r|\n/g, ' ');
  pl = pl.replace(/ +(?= )/g, '');

  let params = pl.match(/[^\s"']+('([^']+)?')?/g);
  elementname = params.shift().trim();
  elementname = elementname.replace(/^>|tv\.|setting\.|placeholder\./, '');

  // handle the properties
  if (params.length > 0) {
    properties = '?\n';
    for (let i = 0; i < params.length; i++) {
      let s = params[i].split('=');
      switch (s[0]) {
        // tell modx element not to cache
        case 'cache':
          if (s[1] == 'false') {
            cache = `!`;
          }
          break;
        case 'snippet':
          // tell modx element it's supposed to be a PHP snippet outcome
          if (s[1] == 'true') {
            prefix = '';
          }
          break;
        case 'content':
          // tell modx this nodde sholud be the content TV
          if (s[1] == 'true') {
            return `[[*content]]`;
          }
          break;

        case '':
          break;

        default:
          properties += parsepropertie(s[0], s[1]);
      }
    }
  }
  properties = (properties.length > 2) ? properties : '';
  return `[[${cache}${prefix}${elementname}${properties}]]`;
}


function modx(done) {
  console.log('modx', files.modxSrc + 'staticScripts/chunks/**/*.html');
  return gulp
    .src([files.modxSrc + 'staticScripts/chunks/**/*.html'])
    // .pipe($.using({}))
    .pipe(replace(/{{([^}]*)}}/g, parsemodx))
    .pipe(gulp.dest(files.modxDest + '/staticScripts/chunks/'))
    .on('end', function () {
      log('modx Done!' + files.modxSrc);
    });
}

function copySnippets() {
  return gulp.src([files.modxSrc + 'staticScripts/snippets/**/*.php'])
    // .pipe($.using({}))
    .pipe(gulp.dest(files.modxDest + '/staticScripts/snippets/'))
    .on('end', function () {
      log('modx copySnippets Done!');
    });
}
function copyPlugins() {
  return gulp.src([files.modxSrc + 'staticScripts/plugins/**/*.php'])
    // .pipe($.using({}))
    .pipe(gulp.dest(files.modxDest + '/staticScripts/plugins/'))
    .on('end', function () {
      log('modx copyPlugins Done!');
    });
}

function modxtemplates(done) {
  return gulp
    .src([files.modxSrc + 'staticScripts/templates/*.html'])
    // .pipe($.using({}))
    .pipe(replace(/{{([^}]*)}}/g, parsemodx))
    .pipe(replace(/-{3}(?:\n|\r)([\s\S]+?)(?:\n|\r)-{3}/g, parseFM))
    .pipe(gulp.dest(files.modxDest + '/staticScripts/templates'))
    .on('end', function () {
      log('modx templates Done!');
    });
}

export { copyPlugins, copySnippets, modx, modxtemplates };

/*
PATHS:
  modxpartials: "clickmodel/src/components"
  modxtemplates: "clickmodel/src/pages"
  modxsnippets: "clickmodel/src/snippets"
 */
