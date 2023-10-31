const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .vue(2)
    .sass("resources/sass/app.scss", "public/css")
    .browserSync("http://admingeniustv.test/");
