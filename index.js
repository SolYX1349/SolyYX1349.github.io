function temas() {
  let fondoBody = document.getElementById('body').style.backgroundColor;
  let fondoMain = document.getElementById('main').style.backgroundColor;
  if (fondoBody == "black") {
    fondoBody.style.backgroundColor = "#fff";
    fondoMain.style.backgroundColor = "#fff";
  } else {
    fondoBody.style.backgroundColor = "black";
    fondoMain.style.backgroundColor = "black";
  }
}
