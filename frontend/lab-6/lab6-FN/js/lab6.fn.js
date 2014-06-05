$(document).ready(function(){
	$('.error').hide();
	$('.total').hide();
	$('.result').hide();
	
	//$('.email').attr('disabled', true);
	//$('.password').attr('disabled', true);
	//$('.confPass').attr('disabled', true);
	//$('.food').attr('disabled', true);
	$('.pymode').attr('disabled', true);
	$('.city').attr('disabled', true);
	
	$('.nombreFull').blur(function(){
		var data = $('.nombreFull').val();
		var len = data.length;

		if (len < 1 || len > 30){
			if (len === 0){
				$('.nombreFull').next().show().text("El Nombre No puede estar vacio");
			$('.email').attr('disabled', true);
			}else{
				$('.nombreFull').next().show().text("El Nombre debe ser mayor a 1 y menor de 30");
				$('.email').attr('disabled', true);
			}



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
				$('.email').next().hide();
				$('.password').removeAttr('disabled');
				localStorage.setItem('email', data);
			}else{
				$('.email').next().show().text('Ingresa una direccionde correo valida');
				$('.password').attr('disabled', true);
			}
		}
	});

	$('.password').blur(function(){
		var data = $('.password').val();
		var len = data.length;

		if (len < 1){
			$('.password').next().show().text("La Clave no puede estar vacia");
			$('.confPass').attr('disabled', true);
		}else{
			$('.password').next().hide();
			$('.confPass').removeAttr('disabled');
			localStorage.setItem('password', data);
		}

	});

	$('.confPass').blur(function(){
		var data = $('.confPass').val();
		var len = data.length;

		if (len < 1){
			$('.confPass').next().show().text("La Confirmacion no puede estar vacia");
			$('.food').attr('disabled', true);
		}else {
			if (valid_pass($('.password'),$('.confPass'))){
			//if ( $('.password').val() === $('.confPass').val()){
				$('.confPass').next().hide();
				$('.food').removeAttr('disabled');
				localStorage.setItem('confPass', data);
			}else{
				$('.confPass').next().show().text("Las claves no coinsiden");
				$('.food').attr('disabled', true);
			}
		}
	});

	$('.food').blur(function(){
		var amount = 0;

		var count = $('#checkFood input:checked').length;
		console.log("arrancaa " + count);
		if (count === 0){
			$('.pymode').attr('disabled', true);
			$('.total').hide();
			$('.error').next().show().text("Debe seleccionar una opcion");
			console.log("igual a cero");
		}else{
			$('form #checkFood').find(':checked').each(function(){
				if ($(this).is(':checked')){
					//console.log("sumando");
					amount = amount + parseInt($(this).val());
					$('.pymode').removeAttr('disabled');
					$('.error').hide();
					$('.total').show().text("El total de los productos es: $" + amount);
					localStorage.setItem('food', amount);
				}else{
					//console.log("debe estar vacio");
					$('.pymode').attr('disabled', true);
					$('.total').hide();
					$('.error').next().show().text("Debe seleccionar una opcion");
					count=0;
				}
			});
			//console.log("count no es cero");
		}
		//event.preventDefault();
	});

	$('pymode').blur(function(){
		var amount = 0;
		var count = $('#checkPymode input:checked').length;
		if (count === 0){
			$('.error').next().show().text("Debe seleccionar una opcion....");
		}else{
			$('.error').hide();
			$('.card').show().text("Usted selecciono " + $('input:checked').attr("value") + " como medio de pago");
			localStorage.setItem('pymode', amount);
			//$('p.result').show();
			//$('p.result').text("Usted selecciono " + $('input:checked').attr("value") + " como medio de pago");
			
		 }
		//event.preventDefault();
	});

















	$('.submit').bind('click', function(event){
		var data = $('.infobox').val();
		event.preventDefault();
	});

	function valid_email(email){
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}

	function valid_pass(password,confPass){
		var pass = password.val();
		var cpass = confPass.val();

		if (pass === cpass ){
			return true;
		}else{
			return false;
		}

	}
});
