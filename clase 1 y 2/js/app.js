$(function(){

	console.log("Hola Mundo");

	$("#campo1").on("change", function(event) {

		$valueName = $(this).val();

		if($valueName != "")
			$(this).attr("name", "Otro Nombre")
		console.log($(this).attr("name"))

	});

});