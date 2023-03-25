let diaSemanaArray = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
];
let monthArray = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
function tiempo() {
  setInterval(obtenerDatos, 1000);
}
function obtenerDatos() {
  let fecha = new Date();
  asignarFecha(
    diaSemanaArray[fecha.getDay()],
    fecha.getDay(),
    monthArray[fecha.getMonth()]
  );
  asignarHora(
    fomatHoras(fecha.getHours()),
    addZero(fecha.getMinutes()),
    addZero(fecha.getSeconds())
  );
}
function asignarFecha(day, dayNum ,month) {
  document.getElementById("dia").innerHTML = day;
  document.getElementById("dia-num").innerHTML = dayNum;
  document.getElementById("mes").innerHTML = month;
}
function asignarHora(horas, minutos, segundos) {
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
function fomatHoras(argument) {
  if (argument >= 13 && argument <= 24) {
    argument = argument - 12;
  }
  if (argument >= 0 && argument <= 9) {
    argument = "0" + argument;
  }
  return argument;
}
