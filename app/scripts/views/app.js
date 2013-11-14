/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/favorites', 
    'collections/movies',
    'views/movieList',
    'models/favorite',
    'views/NotFound',
    'views/favoriteBadge',
    'views/searchForm',
    'bootstrap'
], function ($, _, Backbone, FavoriteCollection, MovieCollection, 
		movieListView, Favorite, NotFoundView, badgeView, searchFormView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: 'body',
		initialize: function(){
			console.log('appView initialized');
			this.$appContainer = $('#wrap');
			
			this.listenTo(MovieCollection, 'change:favorite', this.addOneToFavorite);

			this.badgeView = new badgeView({ collection: FavoriteCollection, el: '#fav-count' });
			this.searchFormView = new searchFormView({ el: '#searchform', collection: MovieCollection });
			
			FavoriteCollection.fetch();
		},
		addOneToFavorite: function(movie) {
            var newFav = new Favorite(movie.toJSON());
            newFav.set({ ordinal: FavoriteCollection.nextOrdinal(), favorite: true });

            FavoriteCollection.create(newFav);
        },
		showView: function(view){
			if(this.currentView){
				this.currentView.close();
			}
			this.currentView = view;

			if(!view){
				this.$appContainer.html(new NotFoundView().render().el);
				return;
			}
			this.$appContainer.html(this.currentView.render().el);
		}
    });

    return AppView;
});