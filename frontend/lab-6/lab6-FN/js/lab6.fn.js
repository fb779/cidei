$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();
	
	$('.email').attr('disabled', true);
	$('.password').attr('disabled', true);
	$('.confPass').attr('disabled', true);
	$('.food').attr('disabled', true);
	$('.pymode').attr('disabled', true);
	$('.city').attr('disabled', true);
	
	$('.nombreFull').blur(function(){
		var data = $('.nombreFull').val();
		var len = data.length;

		if (len < 1 || len > 30){
			$('.nombreFull').next().show().text("El Nombre debe ser mayor a 1 y menor de 30");
			$('.email').attr('disabled', true);
		}else{
			$('.nombreFull').next().hide();
			localStorage.setItem('name', data);
			$('.email').removeAttr('disabled');
		}
	});

	$('.email').blur(function(){
		var data = $('.email').val();
		var len = data.length;

		if (len < 1){
			$('.email').next().show().text("El email no puede estar vacio");
			$('.password').attr('disabled', true);
		}else{
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

			$('.nombreFull').next().hide();
			$('.email').removeAttr('disabled');
		}
	});

	




















	$('.submit').bind('click', function(event){
		var data = $('.infobox').val();
		event.preventDefault();
	});

	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}

});
