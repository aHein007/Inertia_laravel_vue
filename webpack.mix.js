const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .extract() //if you want to extract method you nee to push (three js file (npx mix)) and script in views/app.blade.php
    .vue(3)
    .postCss('resources/css/app.css', 'public/css', [

    ]).disableNotifications()
    ;
