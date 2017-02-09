var gulp = require ( "gulp" ),
    image = require( "gulp-image" ),
    sass = require( "gulp-sass" ),
    autoprefixer = require( "gulp-autoprefixer" ),
    cssp = require( "gulp-csso" ),
    pug = require( "gulp-pug" ),
    babel = require( "gulp-babel" );

// --- Task for images

gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) );
} );

// --- Task for styles

gulp.task( "css", function() {
    gulp.src( "src/sass/**/*.scss" )
        .pipe( sass().on( "error", sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( csso() )
        .pipe( gulp.dest( "assets/css" ) );
} );

// --- Task for pug

gulp.task( "pug", function() {
    gulp.src( "src/pug/**/.pug" )
    .pipe( pug( {} ) )
    .pipe( gulp.dest(".") );
});

// --- Task for js

gulp.task( "js", function() {
    gulp.src( "src/src/**/*.js" )
        .pipe( babel() )
        .pipe( gulp.dest( "assets/js" ) );
} );

// --- Watch tasks

gulp.task( "watch", function() {
    gulp.watch( "src/images/**", ["images"] );
    gulp.watch( "src/sass/**/*.scss", ["css"] );
    gulp.watch( "src/pug/**/*.scss", ["html"] );
    gulp.watch( "src/js/**/*.scss", ["js"] );
} );

// --- Aliases

gulp.task("default", [ "images", "html", "css", "js" ]);
gulp.task( "work", ["default", "watch"] );
