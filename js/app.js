$( document ).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	$(".fa-certificate , .fa-cog").hover(function(){
		$(this).addClass("fa-spin");
	})
	$(".fa-certificate , .fa-cog").mouseleave(function(){
		$(this).removeClass("fa-spin");
	})
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