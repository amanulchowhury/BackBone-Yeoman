/*global define*/

define([
    'jquery',
    'backbone',
    'views/app',
    'views/favoriteList',
    'views/movieList'
], function ($, Backbone, AppView, favListView, movieListView) {
    'use strict';

    var ApprouterRouter = Backbone.Router.extend({
        routes: {
        	'': 'Movies',
            'favorites': 'Favorites',
            '*path': 'NotFound'
        },
        initialize: function (argument) {
            this.appView = new AppView();
        },
        NotFound: function(){
            this.appView.showView();
        },
        Movies: function(){
        	var homeView = new movieListView();
            this.appView.showView(homeView); 
        },
        Favorites: function(){
            var favView = new favListView();
            this.appView.showView(favView);
        }

    });

    return ApprouterRouter;
});