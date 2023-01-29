// https://www.quackit.com/javascript/popup_windows.cfm
// Found a great write up on making popup windows in JS

let popupWindow = null;
function centeredPopup(url, winName, w, h, scroll) {
  LeftPosition = screen.width ? (screen.width - w) / 2 : 0;
  TopPosition = screen.height ? (screen.height - h) / 2 : 0;
  settings =
    "height=" +
    h +
    ",width=" +
    w +
    ",top=" +
    TopPosition +
    ",left=" +
    LeftPosition +
    ",scrollbars=" +
    scroll +
    ",resizable";
  popupWindow = window.open(url, winName, settings);
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function startGame() {
  let activeGame = getCookie("game");

  if (activeGame == "RPS") {
    let scriptRPS = document.createElement("script");
    scriptRPS.setAttribute("src", "./gameRockPaperScissors.js");
    document.body.appendChild(scriptRPS);
  } else if (activeGame == "TTT") {
    let scriptTTT = document.createElement("script");
    scriptTTT.setAttribute("src", "./gameTicTacToe.js");
    document.body.appendChild(scriptTTT);
  } else if (activeGame == "YAT") {
    let scriptYAT = document.createElement("script");
    scriptYAT.setAttribute("src", "./gameYahtzee.js");
    document.body.appendChild(scriptYAT);
  }
}

startGame();
