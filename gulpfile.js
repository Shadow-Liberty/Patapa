var gulp = require ( "gulp" ),
    image = require( "gulp-image" ),
    sass = require( "gulp-sass" ),
    autoprefixer = require( "gulp-autoprefixer" ),
    cssp = require( "gulp-csso" ),
    pug = require( "gulp-pug" );

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
    .pipe( gulp.dest(".") )
})

// --- Task for js

// --- Task for tasks

// --- Aliases
