var gulp = require ( "gulp" ),
    image = require( "gulp-image" );

// --- Task for images
gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) );
});
// --- Task for styles

// --- Task for pug

// --- Task for js

// --- Task for tasks

// --- Aliases
