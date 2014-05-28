$(document).ready(function(){
	$('.error').hide();
	$('.password').attr('disabled', true);
	$('.verPassword').attr('disabled', true);

	$('.user').blur(function(){
		var data = $('.user').val();
		var len = data.length;

		if (len < 1){
			$('.user').next().show();
			$('.password').attr('disabled', true);
			$('.verPassword').attr('disabled', true);
		}else{
			$('.user').next().hide();
			$('.password').removeAttr('disabled');
			$('.verPassword').removeAttr('disabled');
		}
	});

	$('.password').blur(function(){
		var data = $('.password').val();
		var len = data.length;

		if (len < 1){
			$('.password').next().show().text("La Clave no puede estar Vacia");
			$('.verPassword').attr('disabled', true);
		}else{
			$('.password').next().hide();
			$('.verPassword').removeAttr('disabled');
		}
	});

	$('.verPassword').blur(function(){
		var data = $('.verPassword').val();
		var len = data.length;

		if ($('password').val() !== $('verPassword').val()){
			$('.verPassword').next().show().text("Si cuadran");
		}else{
			$('.verPassword').next().hide().text("No cuadran");
			}
		//event.preventDefault();
	});

});
