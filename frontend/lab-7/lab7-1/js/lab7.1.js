$(document).ready(function(){
	
	$('.btnRojo').bind('click', function(event){
		$('#txt1').addClass('aplRojo');
	});

	$('.btnVerde').bind('click', function(event){
		$('#txt2').addClass('aplVerde');
	});

	$('.reset').bind('click', function(event){
		$('#txt1').removeClass('aplRojo	');
		$('#txt2').removeClass('aplVerde');
	});
});