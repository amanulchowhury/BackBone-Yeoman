/*global define*/

define([
    'jquery',
    'underscore',
    'backbone', 
    'views/movie',
    'templates',
    'collections/movies'
], function ($, _, Backbone, MovieView, JST, Movies) {
    'use strict';

    var MovieListView = Backbone.View.extend({
				template: JST['app/scripts/templates/movieList.hbs'],
				className: 'container',
				events: {
					//'update-sort': 'updateSort'
				},
				collection: Movies,
				initialize: function(){
					//this.listenTo(this.collection, 'add', this.addOne);
					this.listenTo(this.collection, 'reset', this.render);
				},

				addOneToSearch: function (movie) {
					var view = new MovieView({ model: movie });
					this.$el.find('#searchlist').prepend(view.render().el);
				},

				render: function () {
					this.$el.html(this.template());
					this.collection.each(this.addOneToSearch, this);
					return this;
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
		return MovieListView;
});