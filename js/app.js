$( document ).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	$(".fa").hover(function(){
		$(this).addClass("fa-spin");
	})
	$(".fa").mouseleave(function(){
		$(this).removeClass("fa-spin");
	})

});