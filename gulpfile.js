var gulp = require ( "gulp" ),
    image = require( "gulp-image" ),
    sass = require( "gulp-sass" ),
    autoprefixer = require( "gulp-autoprefixer" ),
    cssp = require( "gulp-csso" );

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

// --- Task for js

// --- Task for tasks

// --- Aliases
