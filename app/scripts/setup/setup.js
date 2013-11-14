define(['backbone'], 
	function(){
		Backbone.View.prototype.close = function(){
			this.remove();
			this.unbind();
		}
	});