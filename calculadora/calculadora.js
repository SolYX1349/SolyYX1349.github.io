let cadena = "";
function limpiar() {
  cadena = "";
  document.getElementById("p-m-op").innerHTML = 0;
  document.getElementById("p-m-res").innerHTML = 0;
}
function suprimir() {
  let cadenaReducida = document.getElementById("p-m-op").innerHTML.slice(0, -1);
  cadena = cadenaReducida;
  document.getElementById("p-m-op").innerHTML = cadena;
}
function ejecutarOperacion() {
  let a = document.getElementById("p-m-op").innerHTML;
  return eval(a);
}
function addData(element) {
  cadena += element.value;
  document.getElementById("p-m-op").innerHTML = cadena;
}
function resultado() {
  let result = ejecutarOperacion();
  document.getElementById("p-m-res").innerHTML = result;
  document.getElementById("p-m-op").innerHTML = result;
  cadena = result;
}
