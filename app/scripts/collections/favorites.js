/*global define*/

define([
    'underscore',
    'backbone',
    'models/favorite',
    'backbone.localStorage'
], function (_, Backbone, FavoriteModel, Store) {
    'use strict';

    var FavoritesCollection = Backbone.Collection.extend({
        model: FavoriteModel,
        localStorage: new Store('movies-favorite'),
        nextOrdinal: function () {
			if (!this.length) {
				return 0;
			}
			return this.last().get('ordinal') + 1;
		},
        comparator: function(movie){
            return movie.get('ordinal');
        }
    });

    return new FavoritesCollection();
});