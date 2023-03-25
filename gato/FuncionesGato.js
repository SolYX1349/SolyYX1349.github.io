let defaultPlayer = "X";
let defaulMachin = "O";

let a = false;
let b = false;
let c = false;
let d = false;
let e = false;
let f = false;
let g = false;
let h = false;
let i = false;

let playerWins = 0;
let machineWins = 0;

function selectRollPlayers(player1) {
  if (player1 == "O") {
    defaultPlayer = "O";
    defaulMachin = "X";
  } else if (player1 == "X") {
    defaultPlayer = "X";
    defaulMachin = "O";
  }
}

function defaultValues() {
  a = false;
  b = false;
  c = false;
  d = false;
  e = false;
  f = false;
  g = false;
  h = false;
  i = false;
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  document.getElementById("9").innerHTML = "";
}

function updateMarcador() {
  document.getElementById("puntos-jugador").innerHTML = playerWins;
  document.getElementById("puntos-maquina").innerHTML = machineWins;
}

function markPositionSelectedPlayer(position) {
  switch (position) {
    case "1":
      if (a == false) {
        document.getElementById("1").innerHTML = defaultPlayer;
        a = true;
      }
      break;
    case "2":
      if (b == false) {
        document.getElementById("2").innerHTML = defaultPlayer;
        b = true;
      }
      break;
    case "3":
      if (c == false) {
        document.getElementById("3").innerHTML = defaultPlayer;
        c = true;
      }
      break;
    case "4":
      if (d == false) {
        document.getElementById("4").innerHTML = defaultPlayer;
        d = true;
      }
      break;
    case "5":
      if (e == false) {
        document.getElementById("5").innerHTML = defaultPlayer;
        e = true;
      }
      break;
    case "6":
      if (f == false) {
        document.getElementById("6").innerHTML = defaultPlayer;
        f = true;
      }
      break;
    case "7":
      if (g == false) {
        document.getElementById("7").innerHTML = defaultPlayer;
        g = true;
      }
      break;
    case "8":
      if (h == false) {
        document.getElementById("8").innerHTML = defaultPlayer;
        h = true;
      }
      break;
    case "9":
      if (i == false) {
        document.getElementById("9").innerHTML = defaultPlayer;
        i = true;
      }
      break;
    default:
      alert("Error");
  }
  if (comprovarResultados() == false) {
    turnoMaquina();
  }
}
function turnoMaquina() {
  let optionValida = false;
  do {
    let option = Math.floor(Math.random() * 9) + 1;
    switch (option) {
      case 1:
        if (a == false) {
          document.getElementById("1").innerHTML = defaulMachin;
          a = true;
          optionValida = true;
        }
        break;
      case 2:
        if (b == false) {
          document.getElementById("2").innerHTML = defaulMachin;
          b = true;
          optionValida = true;
        }
        break;
      case 3:
        if (c == false) {
          document.getElementById("3").innerHTML = defaulMachin;
          c = true;
          optionValida = true;
        }
        break;
      case 4:
        if (d == false) {
          document.getElementById("4").innerHTML = defaulMachin;
          d = true;
          optionValida = true;
        }
        break;
      case 5:
        if (e == false) {
          document.getElementById("5").innerHTML = defaulMachin;
          e = true;
          optionValida = true;
        }
        break;
      case 6:
        if (f == false) {
          document.getElementById("6").innerHTML = defaulMachin;
          f = true;
          optionValida = true;
        }
        break;
      case 7:
        if (g == false) {
          document.getElementById("7").innerHTML = defaulMachin;
          g = true;
          optionValida = true;
        }
        break;
      case 8:
        if (h == false) {
          document.getElementById("8").innerHTML = defaulMachin;
          h = true;
          optionValida = true;
        }
        break;
      case 9:
        if (i == false) {
          document.getElementById("9").innerHTML = defaulMachin;
          i = true;
          optionValida = true;
        }
        break;
      default:
        alert("Error");
    }
  } while (optionValida == false);
  comprovarResultados();
}
function comprovarResultados() {
  let win = false;
  let pos1 = document.getElementById("1").innerHTML;
  let pos2 = document.getElementById("2").innerHTML;
  let pos3 = document.getElementById("3").innerHTML;
  let pos4 = document.getElementById("4").innerHTML;
  let pos5 = document.getElementById("5").innerHTML;
  let pos6 = document.getElementById("6").innerHTML;
  let pos7 = document.getElementById("7").innerHTML;
  let pos8 = document.getElementById("8").innerHTML;
  let pos9 = document.getElementById("9").innerHTML;

  if (pos1 == defaultPlayer && pos2 == defaultPlayer && pos3 == defaultPlayer) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos4 == defaultPlayer &&
    pos5 == defaultPlayer &&
    pos6 == defaultPlayer
  ) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos7 == defaultPlayer &&
    pos8 == defaultPlayer &&
    pos9 == defaultPlayer
  ) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos1 == defaultPlayer &&
    pos5 == defaultPlayer &&
    pos9 == defaultPlayer
  ) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos3 == defaultPlayer &&
    pos5 == defaultPlayer &&
    pos7 == defaultPlayer
  ) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos1 == defaultPlayer &&
    pos4 == defaultPlayer &&
    pos7 == defaultPlayer
  ) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos2 == defaultPlayer &&
    pos5 == defaultPlayer &&
    pos8 == defaultPlayer
  ) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos3 == defaultPlayer &&
    pos6 == defaultPlayer &&
    pos9 == defaultPlayer
  ) {
    playerWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos1 == defaulMachin &&
    pos2 == defaulMachin &&
    pos3 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos4 == defaulMachin &&
    pos5 == defaulMachin &&
    pos6 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos7 == defaulMachin &&
    pos8 == defaulMachin &&
    pos9 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos1 == defaulMachin &&
    pos5 == defaulMachin &&
    pos9 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos3 == defaulMachin &&
    pos5 == defaulMachin &&
    pos7 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos1 == defaulMachin &&
    pos4 == defaulMachin &&
    pos7 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos2 == defaulMachin &&
    pos5 == defaulMachin &&
    pos8 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  } else if (
    pos3 == defaulMachin &&
    pos6 == defaulMachin &&
    pos9 == defaulMachin
  ) {
    machineWins++;
    updateMarcador();
    defaultValues();
    win = true;
  }
  if (
    pos1 != "" &&
    pos2 != "" &&
    pos3 != "" &&
    pos4 != "" &&
    pos5 != "" &&
    pos6 != "" &&
    pos7 != "" &&
    pos8 != "" &&
    pos9 != ""
  ) {
    updateMarcador();
    defaultValues();
    win = true;
  }
  return win;
}
