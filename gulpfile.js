let gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	sass 		= require('gulp-sass'),
	prefixer 	= require('gulp-autoprefixer'),
	clean 		= require('gulp-clean-css'),
	browser		= require('browser-sync');

// gulp.task('sass', function(cb){
// 	pump([
// 			gulp.src('./resources/scss/**/*.scss'),
// 			prefixer(),
// 			clean(),
// 			gulp.dest('./assets/css')
// 		],
// 		cb
// 		);
// })

gulp.task('css', function(cb){
	return gulp.src('./resources/frontend/css/**/*.css')
		.pipe( prefixer() )
		.pipe( clean() )
		.pipe( gulp.dest("./assets/compro/css/") )
});

gulp.task('js', function(cb){
	return gulp.src('./resources/frontend/js/**/*js')
		.pipe( uglify() )
		.pipe( gulp.dest("./assets/compro/js/") )
});

gulp.task('serve', function(){
	browser.init({
		server: {
			baseDir: "./"
		}
	})
})

// gulp.watch("./resources/sass/**/*.scss", ['sass']);
gulp.watch("./resources/frontend/css/**/*.css", ['css']);
gulp.watch("./resources/frontend/js/**/*.js", ['js']);

gulp.watch("./assets/compro/js/**/*.js").on('change', browser.reload)
gulp.watch("./assets/compro/css/**/*.css").on('change', browser.reload)
gulp.watch("./*.html").on('change', browser.reload)