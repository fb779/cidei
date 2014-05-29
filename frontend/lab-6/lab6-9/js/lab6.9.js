$(document).ready(function(){
	$('error').hide();
	$('result').hide();

	$('.submit').bind('click', function(event){
		var data = $('.infobox').val();
		
		if (valid_email(data)){
			$('.error').hide();
			localStorage.setItem('email', data);
			$('.result').show();
			$('.result').text("El Email ingreado fue: "+localStorage.getItem('email'));
		}else{
			$('.result').hide();
			$('.error').show();
			$('.error').html('<h1>Ingresa una direccionde correo valida</h1>');
		}
		event.preventDefault();
	});

	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}
});
