var controllers = {
	index : function(args){
    	this.render('./pages/index.html', {msg:args.response || 'default response'});
	},
	sub : function(args){
    	this.render('./pages/sub.html', {msg:args.response || 'default response'});
 	},
	echo : function(args){
    	this.renderJson(args);
 	}
};

module.exports = controllers;


