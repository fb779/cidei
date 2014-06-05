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

	$('.verPass').blur(function(){
		var data = $('.verPass').val();
		var len = data.length;
		if (len < 1){
			$('.verPass').next().show().text("La Clave no puede estar Vacia");
		}else /*if ($('password').val() !== $('verPass').val()){
				$('.verPass').next().show().text("Si cuadran");
			}else{
				$('.verPass').next().hide().text("No cuadran");
				}*/
		}
		//event.preventDefault();
	});

});
