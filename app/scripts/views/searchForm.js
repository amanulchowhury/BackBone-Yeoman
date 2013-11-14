/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var SearchformView = Backbone.View.extend({
    	initialize: function(){
    		this.$input = this.$el.find('#search');
    		this.$submit = this.$el.find('#search-button');

    		this.listenTo(this.collection, 'request', this.waitForSearch);
			this.listenTo(this.collection, 'reset', this.showSearchResults);
    	},
    	events: {
            'click #search-button': 'getMovies',
            'submit': 'getMovies'
        },
		newSearch: function(){
			return $.param({
                q: this.$input.val().trim(),
                limit: 20,
                plot: 'full'
            });
		},
		getMovies: function(e){
			e.preventDefault();
			e.stopPropagation();
            this.collection.fetch({ data: this.newSearch(), reset: true, silent: false });
		},
		waitForSearch: function(){
			this.$submit.button('loading');
		},
		showSearchResults: function(){
			this.$submit.button('reset');
			
			Backbone.history.navigate('#', { trigger: true });
		},
    });

    return SearchformView;
});