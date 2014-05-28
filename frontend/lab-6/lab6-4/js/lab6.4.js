$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	$('.submit').click(function(event){
		var amount = 0;
		var count = $('input:checked').length;
		if (count === 0){
			$('p.result').hide();
			$('.error').show();
		}else{
			$('form').find(':checked').each(function(){
				if ($(this).is(':checked')){
					amount = amount + parseInt($(this).val());
				}
			});
			$('.error').hide();
			$('p.result').show();
			$('p.result').text("La suma de los lengajes que les gusta es " + amount);
		}
		event.preventDefault();
	});
});
