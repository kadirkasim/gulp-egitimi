const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

// gulp.task -> gorev olusturmak icin
// gulp.src -> kaynak dosyalari
// gulp.dest -> hedef dizinimiz
// gulp.watch -> izleme ve gorev calistirma
// pipe -> modify

gulp.task('mesaj',()=>{
  console.log("Gulp calisiyor..");
});

gulp.task('imageMin',()=>{
  gulp.src('./src/images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/images/'));
});

gulp.task('kopyaHtml',()=>{
  gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist/'));
})

gulp.task('jsMin',()=>{
  gulp.src('./src/scripts/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('cssMin',()=>{
  gulp.src('./src/styles/**/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('jsCon',()=>{
  gulp.src('./src/scripts/**/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('sass',()=>{
  gulp.src('./src/styles/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('izle',()=>{
  gulp.watch('./src/styles/**/*.css',['cssMin']);
  gulp.watch('./src/scripts/**/*.js',['jsCon']);
})

gulp.task('default',['mesaj','imageMin','kopyaHtml','cssMin' ,'jsCon' , 'sass']);
