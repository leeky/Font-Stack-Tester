$(document).ready(function(){
	var fonts_used = new Array();
	
	var fontstacks = $('*').each(function(i) { 

		fontstack = $(this).css('font-family').split(',');
		fontstack = jQuery.map(fontstack, function(current) { 
			return current.replace(new RegExp("\w+", "g"), "");
		});   
		
		console.warn(fontstack);
		
		jQuery.each(fontstack, function(i,v) {
	
		   if (jQuery.inArray(v, fonts_used) == -1) {
		   		fonts_used.push(v);
		   };  
		
		}); 
		
	});

	console.log(fonts_used); 
});