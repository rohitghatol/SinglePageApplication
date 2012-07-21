({
    appDir: "../",
    baseUrl: "js/",
    dir: "../../BackboneJs-Opt",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //optimize: "none",

    paths: {
        'jquery':'libs/jquery/jquery-min',
        'underscore':'libs/underscore/underscore-min',
        'backbone':'libs/backbone/backbone-optamd3-min',
        'text':'libs/require/text'
    },

    modules: [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
        {
            name: "main"
        }
    ]
})


// Run Command line - node ../../requirejs/r.js -o app.build.js