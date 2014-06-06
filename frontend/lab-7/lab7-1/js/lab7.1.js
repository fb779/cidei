$(document).ready(function(){
	
	$('.btnRojo').bind('click', function(event){
		$('#txt1').addClass('aplicarRojo');
	});

	$('.btnVerde').bind('click', function(event){
		$('#txt2').addClass('aplicarVerde');
	});


});