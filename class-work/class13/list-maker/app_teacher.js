$(document).ready(function () {

	$('#clickme').click(function(){


		var newItem = $('#item').val();
		appendItem(newxxx);
		$('#item').val("");
		
	})

	function appendItem(newxxx){
		$('#list').append('<li>' + newItem + '</li>');
		
	}
})