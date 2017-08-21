$( document ).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$("#checkbox-a").click(function(){
		seleccion();
	})

});

function seleccion(){
	if( $('#checkbox-a').prop('checked') ){
			$( ".check" ).prop( "checked", true );
			$(".vista").fadeIn();
		}else {
			$( ".check" ).prop( "checked", false );
			$(".vista").fadeOut();
		}
}