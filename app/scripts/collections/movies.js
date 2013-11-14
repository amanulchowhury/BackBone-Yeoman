/*global define*/

define([
    'underscore',
    'backbone',
    'models/movie',
    'backbone.localStorage'
], function (_, Backbone, MovieModel, Store) {
    'use strict';

    var MoviesCollection = Backbone.Collection.extend({
        model: MovieModel,
        url: 'http://mymovieapi.com/'
    });

    return new MoviesCollection();
});