/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var FavoriteModel = Backbone.Model.extend({
    	defaults: {
	        getGenres: function(){
	            return this.genres.join(', ');
	        },
            getCast: function(){
                return this.actors.join(', ');
            }
        }
    });

    return FavoriteModel;
});