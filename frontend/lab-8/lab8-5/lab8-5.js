$(document).ready(function(){
		$('#submit').on('click', function(){
	$.ajax({
			type: "POST",
			url: "drinkInfo.json",
			dataType: "json",
			success: function(data){
				var drinks = "<ul>";
				$.each(data, function(i, n){
					drinks += '<li>'+ n["options"]+'</li>';
				});
				drinks += '</ul>';
				$('#message').append(drinks);
			}
		});
		return false;
	});
});