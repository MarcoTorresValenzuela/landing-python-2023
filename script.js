function saludo() {
  alert("Hola mundo,¿como estan'");
  var nombre = prompt("Ingrese su nombre:");
  alert("hola " + nombre);
}

function gracias() {
  alert("gracias por visitar la pagina");
}

var inicio = document.getElementsByClassName("link")[0];
inicio.addEventListener("click", function() {
  saludo();
});

var sld = document.getElementsByClassName("link")[1];
sld.addEventListener("click", function() {
  gracias();
});