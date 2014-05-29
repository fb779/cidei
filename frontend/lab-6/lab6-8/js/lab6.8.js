$(document).ready(function(){
	$('error').hide();
	$('result').hide();

	$('.submit').bind('click', function(event){
		var count = $('select option:selected').val();

		//$('p.prueba').show();
		//$('p.prueba').text("Valor de llegada" + count);

		if (count === '0' || count === undefined){
			$('p.result').hide();
			$('p.error').show();
			$('p.error').text("Debe seleccionar un elemento");
		}else{
			var selectOptions=[];
			$('select option:selected').each(function(){
				selectOptions.push(" "+$(this).text());
			});

			$('p.error').hide();
			$('p.result').show();
			$('p.result').text("Usted a seleccionado el alimento" + selectOptions);
			//$('p.result').text("Usted a seleccionado el alimento " + $('select option:selected').text());
		}
		event.preventDefault();
	});
});
