/*VALIDACIONES*/
//Al momento de hacer click, se muentran las validaciones
$(document).on("ready", inicio);
function inicio(){
	$("#bFiltro").on("click", validarDatos);
}
function validarDatos(){
	var cb = $("input[type = 'checkbox']:checked");
	var habitaciones = $("#habitaciones option:selected");

	if (cb.length == 0) {
		$("#mensaje1").fadeIn();
		return false;
	}else{
		$("#mensaje1").fadeOut();
	}
}
