$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(event){
		var data = $('.infobox').each(function(){
			var data = $(this).val();
			var len = data.length;

			if (len < 1){
				//$(this).parent().find('.error').show();
				if ($(this).attr("name")==="user"){
					$(this).parent().find('.error').show().text("Debe Diligenciar el usuario ");	
				}
				if ($(this).attr("name")==="password"){
					$(this).parent().find('.error').show().text("Debe Diligenciar la clave ");
				}

				
				

			}else{
				$(this).parent().find('.error').hide();

			}

		});
		event.preventDefault();
	});
});
