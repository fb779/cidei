$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	$('.submit').click(function(event){
		var amount = 0;
		var count = $('input:checked').length;
		if (count === 0){
			$('.error').show();
			$('.error').text("Debe seleccionar una opcion....");
		}else{
			$('.error').hide();
			$('p.result').show();
			$('p.result').text("Usted selecciono " + $('input:checked').attr("value") + " como medio de pago");
			
		 }
		event.preventDefault();
	});
});
