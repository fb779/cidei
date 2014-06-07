$(document).ready(function(){
	
	$('#btn').bind('click', function(){
		$('#cambio').addClass('color');
		$('body').addClass('color');
		event.preventDefault();
	});
	
});