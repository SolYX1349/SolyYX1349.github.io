function animation() {
  setInterval(escritura1, 500);
  setInterval(escritura2, 1000);
  setInterval(escritura3, 500);
  setInterval(escritura4, 1000);
}
function escritura1() {
  document.getElementById("descripcion").innerHTML = "DESAROLLADOR BACKEND";
}
function escritura2() {
  document.getElementById("descripcion").innerHTML = "DESAROLLADOR BACKEND |";
}
function escritura3() {
  document.getElementById("about-titulo").innerHTML = "ABOUT";
}
function escritura4() {
  document.getElementById("about-titulo").innerHTML = "ABOUT |";
}
