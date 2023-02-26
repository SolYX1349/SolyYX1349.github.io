function ejecutarFuncionalidades() {
  updateAge();
}

function updateAge() {
  let fecha = new Date();
  let year = fecha.getFullYear();
  let edad = year - 2001;
  if (fecha.getMonth() <= 9) {
    edad = year - 2001 - 1;
  }
  document.getElementById("edad").innerHTML = "Edad: " + edad;
}
