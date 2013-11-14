/*global define*/

define([
    'jquery',
    'underscore',
    'backbone', 
    'views/favorite',
    'templates',
    'collections/favorites'
], function ($, _, Backbone, FavoriteView, JST, Favorites) {
    'use strict';

    var FavListView = Backbone.View.extend({
    			template: JST['app/scripts/templates/favoriteList.hbs'],
				className: 'container',
				events: {
					'update-sort': 'updateSort'
				},
				collection: Favorites,
				initialize: function(){
					this.listenTo(this.collection, 'reset', this.render);
				},

				render: function(){
					this.$el.html(this.template());
					this.collection.sort().each(this.addOne, this);
					return this;
				},

				addOne: function(model){
					var element = new FavoriteView({model: model}).render().el;
					this.$el.find('#favlist').prepend(element);
				},

				updateSort: function(event, model, position){
					var actualPosition = this.collection.length - (position + 1);
					this.collection.remove(model);
			        this.collection.each(function (item, index) {
			            var ordinal = index;
			            if (index >= actualPosition)
			                ordinal += 1;
			            item.save({ 'ordinal': ordinal });
			        });            
			        
			        model.set('ordinal', actualPosition);
			        this.collection.create(model, {silent: true});

			        this.addAll();
				}
			});
		return FavListView;
});