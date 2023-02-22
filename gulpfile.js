const { watch, dest, parallel, src } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const babelify = require("babelify");
const uglify = require("gulp-uglify");
const buffer = require("vinyl-buffer");
const ghPages = require('gulp-gh-pages');
const connect = require("gulp-connect");
const ghpage = require('gh-pages');

ghpage.publish('dist', function(err) {});

const paths = {
    html: {
        all: "src/templates/**/*.html",
    },
    styles: {
        all: "src/styles/**/*.scss",
        main: "src/styles/main.scss",
    },
    scripts: {
        all: "src/scripts/**/*.js",
        main: "src/scripts/app.js",
    },
    img: {
        all: "src/assents/**/*.png",
    },
    svg: {
        all: "src/assents/**/*.svg",
    },

    output: "dist",
};

function server() {
    connect.server({ root: "dist", livereload: true, port: 3000 });
}

function sentinel() {
    watch(paths.html.all, { ignoreInitial: false }, html);

    watch(paths.img.all, { ignoreInitial: false }, img);
    watch(paths.svg.all, { ignoreInitial: false }, svg);
    watch(paths.styles.all, { ignoreInitial: false }, styles);
    watch(paths.scripts.all, { ignoreInitial: false }, scripts);
}

function html() {
    return src(paths.html.all).pipe(dest(paths.output)).pipe(connect.reload());
}



function img() {
    return src(paths.img.all).pipe(dest(paths.output)).pipe(connect.reload());
}
function svg() {
    return src(paths.svg.all).pipe(dest(paths.output)).pipe(connect.reload());
}

function styles() {
    return gulp
        .src(paths.styles.main)
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest(paths.output))
        .pipe(connect.reload());
}

function scripts() {
    return browserify(paths.scripts.main)
        .transform(
            babelify.configure({
                presets: ["@babel/preset-env"],
            })
        )
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest(paths.output))
        .pipe(connect.reload());
}

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
      .pipe(ghPages({
        remoteUrl: 'https://ueber-james.github.io/portifolio.github.io/',
        branch: 'main'
      }));
  });

exports.default = parallel(server, sentinel);
