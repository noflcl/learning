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
