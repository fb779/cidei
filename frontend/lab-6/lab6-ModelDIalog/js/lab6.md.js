$(document).ready(function(){
	localStorage.clear();
	function Validate(){};

	Validate.prototype = {
		mail : function(eml){
			var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
			return pattern.test(eml);
		},
		userid : function(uid){
			var pattern = new RegExp(/^[0-9]+$/);
			return pattern.test(uid);	
		}
	}

	$('#nid').focus(function(){
		$(this).addClass('inputs')
	});

	$('#username').focus(function(){
		$(this).addClass('inputs')
	});

	$('.password').focus(function(){
		$(this).addClass('inputs')
	});

	$('.conf-password').focus(function(){
		$(this).addClass('inputs')
	});

	$('.nid-error').addClass('error');
	$('.nid-error').hide();

	$('.user-error').addClass('error');
	$('.user-error').hide();

	$('.password-error').addClass('error');
	$('.password-error').hide();

	$('.conf-password-error').addClass('error');
	$('.conf-password-error').hide();

	$('.email-error').addClass('error');
	$('.email-error').hide();

	$('.food-error').addClass('error');
	$('.food-error').hide();

	$('.pay-error').addClass('error');
	$('.pay-error').hide();

	$('.city-error').addClass('error');
	$('.city-error').hide();

	$('#buttons #info').remove();

	$('.button').bind('click', function(event){

		if ($('#info')){
			$('#openModal > div').empty();
			$('#info').remove();

			console.log("Si Existe Info");
		}else{
			console.log("No Existe Info");
		}

		var validate = new Validate();

		var data = $('#nid').val();

		if (validate.userid(data)){
			$('input#nid').removeClass('error');
			$('input#nid').addClass('success');
			$('.nid-error').hide();
			localStorage.setItem('nid', data);
		}else{
			$('input#nid').removeClass('success');
			$('input#nid').addClass('error');
			$('.nid-error').show();
			$('.nid-error').text("Indique su documento de Identidad Valido");
		}

		var data = $('#username').val();
		var len = data.length;

		if (len < 1 && data === ""){
			$('input#username').removeClass('success');
			$('input#username').addClass('error');
			//$('#username').next().show();
			$('.user-error').show();
			$('.user-error').text("Indique su(s) Nombre(s) y Apellido(s)");
			
		}else{
			$('input#username').removeClass('error');
			$('input#username').addClass('success');
			//$('#username').next().hide();
			$('.user-error').hide();
			localStorage.setItem('username', data);
		}

		var data = $('.password').val();
		var len = data.length;

		if (len < 1 && data === ""){
			$('input.password').addClass('error');
			$('input.password').removeClass('success');
			$('.password').next().show();
			$('.password-error').next().show();
			$('.password-error').text("Indique su clave");
			
		}else{
			$('input.password').removeClass('error');
			$('input.password').addClass('success');
			$('.password').next().hide();
			$('.password-error').next().hide();
			localStorage.setItem('password', data);
		}

		var confData = $('.conf-password').val();
		var len = confData.length;

		if (len < 1 && confData === ""){
			$('input.conf-password').addClass('error');
			$('input.conf-password').removeClass('success');
			$('.conf-password').next().show();
			$('.conf-password-error').next().show();
			$('.conf-password-error').text("Confirme la clave");
			
		}else{
			$('input.conf-password').addClass('error');
			$('input.conf-password').removeClass('success');
			$('.conf-password').next().hide();
			$('.conf-password-error').next().hide();

			if ( $('.password').val() !== $('.conf-password').val() ){
				$('input.password').addClass('error');
				$('input.password').removeClass('success');
				$('input.conf-password').addClass('error');
				$('input.conf-password').removeClass('success');
				$('.conf-password').next().show();
				$('.conf-password-error').next().show();
				$('.conf-password-error').text("Las claves no coinciden");
			}else{
				$('input.password').removeClass('error');
				$('input.password').addClass('success');
				$('input.conf-password').removeClass('error');
				$('input.conf-password').addClass('success');
				$('.conf-password').next().hide();
				$('.conf-password-error').next().hide();
			}
		}

		var data = $('.email').val();

		if (validate.mail(data)){
			console.log("Validacion de email"+validate.mail(data));
			$('input.email').removeClass('error');
			$('input.email').addClass('success');
			$('.email').next().hide();
			$('.email-error').next().hide();
			localStorage.setItem('email', data);	
		}else{
			console.log("Validacion de email"+validate.mail(data));
			$('input.email').removeClass('success');
			$('input.email').addClass('error');
			//$('.email').next().hide();
			$('.email-error').show();
			$('.email-error').text("El Email no es correcto");
		}

		var count = 0, meals = {};
		$('#checkboxes').find(':checked').each(function(){
			if ($(this).is(':checked')){
				count += parseInt($(this).val());
				meals[$(this).attr('name')] = parseInt($(this).val());
			}
		});

		if (count === 0){
			$('.food-total').hide();
			$('.food-error').css({'margin': 50}).show();
			$('.food-error').text("Debe seleccionar un alimento");

		}else{
			$('.food-error').hide();
			$('.food-total').show();
			$('.food-total').text("El valor del Pedido es: $"+count+" M/Cte" );

			localStorage.setItem('total', count);
			localStorage.setItem('meals', JSON.stringify(meals));
		}
		

		count = 0;

		$('#radios').find(':radio').each(function(){
			if ($(this).is(':checked')){
				count++;
				localStorage.setItem('paymode', $(this).val());
			}
		});

		if (count === 0){
			$('.pay-error').css({'margin-left': 50}).show();
			$('.pay-error').text("Debe seleccionar un medio de pago");
		}else{
			$('.pay-error').hide();

			//localStorage.setItem('total', count);
		}

		count = $('select option:selected').val();
		if ( count === "0" ){
			$('.city-error').show();
			$('.city-error').text("Debe seleccionar un medio de pago");
		}else{
			$('.city-error').hide();
			localStorage.setItem('city', count);
			
			$('#buttons').append(
				'<a id="info" href="#openModal"> Ver detalle del Pedido</a>' 
			);

			$('.inputs').removeClass('error');
			$('.inputs').addClass('success');

		}
		
		event.preventDefault();
	});

	$(document).on('click','#info', function(){
		//$('#openModal > div').empty();
		//$('#info').remove();
		$('#openModal > div').append(
			'<h2> Detalle del Pedido </h2>'+
			'<ul>'+
			'<li> Su nombre es: '+ localStorage.getItem('username')+'</li>'+
			'<li> Su Documento de identidad es: '+ localStorage.getItem('nid')+'</li>'+
			'<li> Su Email es: '+ localStorage.getItem('email')+'</li>'+
			'<li id="listMeals">Los Alimentos  que solicito son: <ul> </ul> </li>'+
			'<li> El Medio de pago es: '+ localStorage.getItem('paymode')+'</li>'+
			'<li> La Ciudad donde vive es: '+ localStorage.getItem('city')+'</li>'+
			'</ul>'+
			'<a href="#close" title="Close" class="close" >X</a>'

		);

		var meals = JSON.parse(localStorage.getItem('meals'));

		$.each(meals, function(key, value){
			$('#listMeals > ul').append('<li>El producto '+ key +' cuesta $'+ value +'M/Cte</li>');
		});
	});
});
