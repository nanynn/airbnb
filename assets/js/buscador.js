$(document).ready(function() {

	$('#btn-datos').click(function(event) {
		datosDonde();
		datosHuesped();

		if(datosDonde() && datosHuesped()){
			window.location.href = "resultado.html";
			var lugar = $("#donde").val();
			var llegada = $("#llegada").val();
			var salida = $("#salida").val();
			var personas = $("#cantidad").val();

			localStorage.setItem("lugar", lugar);
			localStorage.setItem("llegada", llegada);
			localStorage.setItem("salida", salida);
			localStorage.setItem("personas", personas);
		}
	});

	//configuración de idioma del plugin
	$.datepicker.setDefaults($.datepicker.regional["es"]);

	//plugin que permite poner un calendario en un input
	$("#llegada").datepicker({
		firstDay: 1,
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
		dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		onSelect: function (date) {
		alert(date)
		}
	});
	$("#salida").datepicker({
		firstDay: 1,
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
		dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		onSelect: function (date) {
		alert(date)
		}
	});

});

//inputs de buscador validados
var datosDonde = function (){
	var donde = $("#donde").val();

	if(donde.length == 0){
		$("#donde").append(alert("Debes escribir un lugar"));
		//$(".tooltipped").show();
		return false;
	} else{
		return true;
	}
}

var datosHuesped = function (){
	var huesped = $("#cantidad").val();

	if(huesped.length == 0){
		$("#cantidad").append(alert("Debes escribir un lugar"));
		//$(".tooltipped").show();
		return false;
	} else{
		return true;
	}
}