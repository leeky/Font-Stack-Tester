$(document).ready(function(){
	var fonts_used = new Array();
	
	var fontstacks = $('body *').each(function(i) { 

		fontstack = $(this).css('font-family').split(',');
		fontstack = jQuery.map(fontstack, function(current) { 
			return current.replace(new RegExp("\w+", "g"), "");
		});   
			
		jQuery.each(fontstack, function(i,v) {
	
		   if (jQuery.inArray(v, fonts_used) == -1) {
		   		fonts_used.push(v);
		   };  
		
		}); 
		
	});
	
	// GUI  
	gui = $('body').append('<div id="fontstacker_gui" style="position: absolute; top: 0; left: 0; background-color: #ccc; display: block; padding: 10px; width: 95%;">Font Stack Tester: </div>');
	
	jQuery.each(fonts_used, function(i,v) {
	   $('#fontstacker_gui').append('<button id="fontstacker_toggle_' + v + '">Remove ' + v + '</button>'); 
	   
	   $('#fontstacker_toggle_' + v).click(function() {
			fontstacker_remove_font(v);
	   });
	});                           
    
});

function fontstacker_remove_font(font) {
	
	var fontstacks = $('body *').each(function(i,v) { 

		fontstack = $(v).css('font-family').replace(font, 'zzz'); 
		$(v).css('font-family', fontstack);

	});
	 
	$('#fontstacker_toggle_' + font).attr('disabled','disabled');
}