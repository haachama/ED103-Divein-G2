const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');  //mini壓縮CSS檔案
const sass = require('gulp-sass');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');


//先執行 clear > sass > cleanCSS
gulp.task('sass', ['clear'], function () {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('app/css/'))
})

gulp.task('clear', function () {
    return gulp.src('./app/css', {
            read: false, //read 選項可避免 Gulp 讀取文件中的內容，單純的傳入任務依據，提高效能
            allowEmpty: false //allowEmpty 為允許任務依據為空，此選項可避免 gulp-clean 未偵測到 ./css 資料時執行刪除所發生的錯誤
        })
        .pipe(clean());
});



// html template
gulp.task('fileinclude', function () {
    gulp.src(['*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./app'));
});



var reload = browserSync.reload;

// 瀏覽器
gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: "./app",
            index: "memberLogin.html"
        }
    });
    gulp.watch(['sass/*.scss' , 'sass/**/*.scss'], ['sass']).on('change', reload);
    gulp.watch(['./*.html', './layout/*.html'], ['fileinclude']).on('change', reload);
});
