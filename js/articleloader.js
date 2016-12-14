$(function() {
	for (var i = 0; i>0; i--) {
		$("div#articles").append("<div class='article' id='article" + i + "'></div>");
		$("#article" + i).load("articles/" + i + ".txt");
	}			
});
	
$(function(){ $("#section").load("home.html"); });
