var gulp = require('gulp'),
    uglify=require('gulp-uglify'),
    cssmin=require('gulp-minify-css');

//gulp压缩js
gulp.task('jsmin',function(){
    gulp.src('dest/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('src/js/'))
});
//gulp压缩css处理
gulp.task('cssmin', function () {
    gulp.src('dest/css/*')
        .pipe(cssmin())
        .pipe(gulp.dest('src/css/'));
});

gulp.task('default',['jsmin','cssmin']);

//监听事件
gulp.task('watch',function(){
    gulp.watch('dest/js/*', ['jsmin']);
    gulp.watch('dest/css/*', ['cssmin']);
});
