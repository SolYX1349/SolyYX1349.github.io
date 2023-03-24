function reloj() {
  setInterval(obtenerDatos, 1000);
}

function obtenerDatos() {
  let fecha = new Date();
  let segundos = addZero(fecha.getSeconds());
  let minutos = addZero(fecha.getMinutes());
  let horas = fomatHoras(fecha.getHours());
  document.getElementById("hora-dia").innerHTML = horas;
  document.getElementById("minuto-dia").innerHTML = minutos;
  document.getElementById("segundo-dia").innerHTML = segundos;
}
function addZero(argument) {
  if (argument >= 0 && argument <= 9) {
    argument = "0" + argument;
  }
  return argument;
}
function fomatHoras(argument){
    if(argument >= 13 && argument <= 24){
        argument = argument - 12;
    }
    if(argument >= 0 && argument <= 9){
        argument = "0" + argument;
    }
    return argument;
}