// Contador
var target = 0;

var cargarPagina = function () {
  // Elementos
  var $botones = $(".control");
  var $anterior = $(".previous");
  var $siguiente = $(".next");

  //Eventos
  $botones.click(cambiarImagen);
  $anterior.click(anteriorImagen);
  $siguiente.click(siguienteImagen);
  console.log($botones);

};

$(document).ready(cargarPagina);

// Funciones
function cambiarImagen () {
  target = $(this).data("target");
  mostrarImagen(target);
  console.log("target", target);
}

function mostrarImagen (target) {
  var lastSlide = $("div.active");
  console.log("lastSlide", lastSlide);
  var slide = $("div[data-slide='" + target + "']");
  console.log("slide", slide);
  lastSlide.removeClass("active");
  slide.addClass("active");
}

function anteriorImagen (e) {
  e.preventDefault();
  target = target - 1;
	target = (target < 0) ? 3 : target;
	mostrarImagen(target);
}

function siguienteImagen(e) {
  e.preventDefault();
  target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);
}
