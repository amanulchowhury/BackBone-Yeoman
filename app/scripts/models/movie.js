/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MovieModel = Backbone.Model.extend({
        defaults: {
			favorite: false,
            getGenres: function(){
                return this.genres.join(', ');
            },
            getCast: function(){
                return this.actors.join(', ');
            }
		}
    });

    return MovieModel;
});