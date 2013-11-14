/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var FavoriteView = Backbone.View.extend({
        tagName: 'li',
        template: JST['app/scripts/templates/movie.hbs'],
		className: 'item-view',
		events: {
	        'drop' : 'drop',
	        'click .destroy': 'clear',
            'click .more': 'showMore',
            'click .less': 'showLess'
	    },
		initialize: function(){
			this.listenTo(this.model, 'destroy', this.remove);
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
            return this;
		},
		drop: function(event, index){
			this.$el.trigger('update-sort', [this.model, index]);
		},
		clear: function(){
			this.model.destroy();
		},
        showMore: function(e){
            e.preventDefault();
            this.$el.find('.plot').hide();
            this.$el.find('.plot-ext').show();
        },
        showLess: function(e){
            e.preventDefault();
            this.$el.find('.plot-ext').hide();
            this.$el.find('.plot').show();
        }
    });

    return FavoriteView;
});