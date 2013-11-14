/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NotfoundView = Backbone.View.extend({
        template: JST['app/scripts/templates/NotFound.hbs'],
        render: function(){
        	this.$el.html(this.template());
        	return this;
        }
    });

    return NotfoundView;
});