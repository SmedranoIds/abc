$( document ).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	$(".fa-certificate , .fa-cog").hover(function(){
		$(this).addClass("fa-spin");
	})
	$(".fa-certificate , .fa-cog").mouseleave(function(){
		$(this).removeClass("fa-spin");
	})


});