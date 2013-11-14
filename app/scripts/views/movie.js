/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var MovieView = Backbone.View.extend({
        tagName: 'li',
        className: 'item-view',
        template: JST['app/scripts/templates/movie.hbs'],
        events: {
            'click .add-movie': 'makeFavorite',
            'click .more': 'showMore',
            'click .less': 'showLess'
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        makeFavorite: function(){
            this.model.set({favorite: true});
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

    return MovieView;
});