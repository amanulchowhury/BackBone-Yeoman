/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        'jquery-ui':  ['jquery' ]
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        'jquery-ui': '../bower_components/jquery-ui/ui/minified/jquery-ui.min',
        'backbone.localStorage': '../bower_components/backbone.localStorage/backbone.localStorage-min'
    }
});

require([
    'backbone',
    'routes/AppRouter',
    'setup/setup'
], function (Backbone, router) {
    new router();
    Backbone.history.start();
});
