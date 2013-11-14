/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var FavoritebadgeView = Backbone.View.extend({
        //el: '#fav-count',
        initialize: function(){
        	this.listenTo(this.collection, 'add', this.render);
			this.listenTo(this.collection, 'remove', this.render);
			this.listenTo(this.collection, 'reset', this.render);
        },
		render: function(){
			this.$el.text(this.collection.length);
		}
    });

    return FavoritebadgeView;
});