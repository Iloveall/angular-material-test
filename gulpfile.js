var gulp = require('gulp'),                        // Gulp
		concatCss = require('gulp-concat-css'),        // Concat css files
		autoprefixer = require('gulp-autoprefixer'),   // Prefix for css (old browser)
		rename = require('gulp-rename'),               // Rename files
		minifyCss = require('gulp-minify-css'),        // Minification css files
  	concat = require("gulp-concat"),               // Concat
  	uglify = require('gulp-uglify'),	             // Min js
		compass = require('gulp-compass'),						 // Compass
		path = require('path'),  											 // Path
    webserver = require('gulp-webserver'),         // Webserver
		ngAnnotate = require('gulp-ng-annotate'), 		 // ngAnnotate
		sourcemaps = require('gulp-sourcemaps'),			 // Sourcemaps
		bower = require('gulp-bower'),								 // Bower
		jshint = require('gulp-jshint'),		  				 // jshint
		serve = require('gulp-serve'),								 // Serve
		notify = require('gulp-notify');							 // Notify

var options = {
	pathBower: './bower_components/',
	pathFrom: './client/',
	pathTo: './dist/'
};

var packages = [
	// options.pathBower + "bower_components/lodash/dist/lodash.min.js",
	options.pathBower + "angular/angular.min.js",
	options.pathBower + "angular-animate/angular-animate.min.js",
	options.pathBower + "angular-resource/angular-resource.min.js",
	options.pathBower + "angular-aria/angular-aria.min.js",
	options.pathBower + "angular-messages/angular-messages.min.js",
	options.pathBower + "angular-material/angular-material.min.js",
	options.pathBower + "angular-ui-router/release/angular-ui-router.min.js",
	options.pathBower + "angular-img-fallback/angular.dcb-img-fallback.min.js"
];

var packages_css = [
	options.pathBower + "angular-material/angular-material.min.css"
];

var packages_asset = [
	options.pathBower + "angular-material/**"
];

var scripts = [
	options.pathFrom + "app/app.module.js",
	options.pathFrom + "app/app.config.js",
	options.pathFrom + "app/app.routing.js",
	options.pathFrom + 'app/**/*.js'
];

var templates = [
	options.pathFrom + "**/*.html"
];

// gulp.task('index', function() {
//   gulp.src(options.pathFrom + "index.html")
//     .pipe(gulp.dest(options.pathTo));
// });

gulp.task('packages_asset', function() {
  gulp.src(packages_css)
    .pipe(concat("packages.min.css"))
    .pipe(gulp.dest(options.pathTo + 'packages'));

	gulp.src(packages_asset)
    .pipe(gulp.dest(options.pathTo + 'packages'));

});

gulp.task('packages', function() {
  return gulp.src(packages)
    .pipe(concat('packages.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(options.pathTo + 'packages'))
		.pipe(notify("Packages done!"));
});

gulp.task('angular', function() {
  return gulp.src(scripts)
		.pipe(sourcemaps.init())
		// .pipe(jshint())
		// 	.pipe(jshint.reporter('YOUR_REPORTER_HERE'))
    .pipe(concat('app.min.js'))
		.pipe(ngAnnotate())
    .pipe(uglify())
		.pipe(sourcemaps.write())
    .pipe(gulp.dest(options.pathTo + 'js'));
		// .pipe(notify("Angular done!"));
});

gulp.task('template', function() {
  return gulp.src(templates)
    .pipe(gulp.dest(options.pathTo));
});

gulp.task('compass', function() {
  gulp.src(options.pathFrom + "scss/style.scss")
    .pipe(compass({
      css: options.pathFrom + 'css',
      sass: options.pathFrom + 'scss'
    }))
  	.pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    }))
  	.pipe(minifyCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(options.pathTo + 'css'));
});

gulp.task('image', function() {
  return gulp.src(options.pathFrom + 'img/**/*')
    .pipe(gulp.dest(options.pathTo + 'img'))
});

gulp.task('watch', function(){
    gulp.watch(options.pathFrom + 'scss/**/*.scss', ['compass']);
    gulp.watch(options.pathFrom + 'app/**/*.js', ['angular']);
    gulp.watch(options.pathFrom + '**/*.html', ['template']);
    // gulp.watch(options.pathFrom + 'svg/**/*.svg', ['svg']);
});

gulp.task('serve', serve({
	port: 3001,
	root: ['dist']
}));

gulp.task('default', [
	'template',
	'angular',
	'compass',
	'image',
	'watch'
]);
