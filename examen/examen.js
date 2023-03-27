function generarExamen() {
    document.getElementById("lista-html").innerHTML = cadena;
}
function obtenerResultado() {

}

let arrayPreguntas = [
  Preguntas(
    "¿Cual es el arbol mas alto?",
    ["hola", "adios", "como", "paraque"],
    [false, true, false, false]
  ),
];
let cadena = "";
for (let iterator of arrayPreguntas) {
    cadena += '<li><p id="lista-html">`' + iterator.getPregunta() + '</p><fieldset>'
            '<input type="radio" name="pregunta1" id="respuesta1" />'
            '<p>' + iterator.getRespuesta() + '</p>'
            '<input type="radio" name="pregunta1" id="respuesta2" />'
            '<p>' + iterator.getPregunta() + '</p>'
            '<input type="radio" name="pregunta1" id="respuesta3" />'
            '<p>Respuesta3</p>'
            '<input type="radio" name="pregunta1" id="respuesta4" />'
            '<p>Respuesta4</p>'
          '</fieldset>'
        '</li>'
}
class Preguntas {
  constructor(pregunta, respuesta, respuestaValor) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.respuestaValor = respuestaValor;
  }
  get getPregunta() {
    this.pregunta;
  }
  get getRespuesta() {
    this.respuesta;
  }
  get getRespuestaValor() {
    this.respuestaValor;
  }
}
