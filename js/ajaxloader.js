var AjaxContentLoad = function(){
    var contentDiv; 
	return {
		getContent : function(url){
			$(contentDiv).animate({opacity:0}, //Turn the opacity to 0
					function(){ // the callback, loads the content with ajax
						$(contentDiv).load(url, //only loads the selected portion
							function(){
							  	$(contentDiv).animate({opacity:1}); //and finally bring back the opacity back to 1
							}
						);        
			});
		},
		attach: function(elem){
			$(elem).click(function(){
				AjaxContentLoad.getContent(this.href);
				return false; //prevents the link from beign followed
			});
		},
		init: function(elem){
			contentDiv = elem; 
			return this; //returns the object in order to make it chainable
		}
	}
}();

$(function(){ $("#section").load("home.html"); });
$(function(){ AjaxContentLoad.init("#section").attach(".menu .nav a"); });

$('.menu .nav a').click(function(){ $('.navbar-toggle:visible').click(); });
