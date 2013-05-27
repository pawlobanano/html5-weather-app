$(document).ready( function() {
	
	app.init();
	
	


	$(".panel").swipe( {

		swipeLeft:function(event, direction, distance, duration, fingerCount) {
		  app.swipeLeft(); 
		},
		
		swipeRight:function(event, direction, distance, duration, fingerCount) {
		  app.swipeRight(); 
		},
		
		swipeUp:function(event, direction, distance, duration, fingerCount) {
		  app.swipeUp(); 
		},
		
		swipeDown:function(event, direction, distance, duration, fingerCount) {
		  app.swipeDown(); 
		}						
		
    });
	
	
});