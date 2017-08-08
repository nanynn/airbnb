$(document).ready(function(){
	$(".filtros-avanzados").hide();
	$(".boton-filtros").click(function(event){
  		event.preventDefault();
		//$(".filtros-avanzados").toggle("slow","display");
		$(".filtros-avanzados").show();
		
	});
	$(".boton-filtro-cerrar").click(function(event){
  		event.preventDefault();
		$(".filtros-avanzados").hide();
	});

	
	
})

