const gulp = require("gulp");
const gm = require('gulp-gm');
const imagemin = require("gulp-imagemin");
const watch = require("gulp-watch");

gulp.task('default', function() {
	//Watch for file changes
	gulp.src('src/*')
	.pipe(gm(function (gmfile) {
		//Resize largest side to 512px (Telegram's requirement), maintaining aspect ratio (also convert to PNG)
		return gmfile.resize(512, 512).setFormat('png');
 	}))
 	//Compress images
	.pipe(imagemin())
	//Output to dist directory
	.pipe(gulp.dest('dist'));
})

gulp.task('watch', function() {
	gulp.start('default');
	gulp.watch('src/*', ['default']);
});