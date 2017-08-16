import gulp from "gulp";
import config from '../config';
import uglify from "gulp-uglify";
import pump from "pump";

gulp.task('compress', function (cb) {
  pump([
      gulp.src(`${config.buildDir}/app.js`),
      uglify(),
      rename({suffix: '.min'}),
      gulp.dest(`${config.buildDir}`)
    ],
    cb
  );
});
