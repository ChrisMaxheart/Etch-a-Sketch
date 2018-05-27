function gameRun(l, w) {
  localStorage.setItem("length", l);
  localStorage.setItem("width", w);
  window.open("game.html", "any", false);
}

function validate() {
  let l = document.getElementById("length").value;
  let w = document.getElementById("width").value;
  if (isNaN(l) || isNaN(w) || l < 5 || w < 5 || l > 15 || w > 15) {
    alert("check your input again");
  } else {
    gameRun(l, w);
  }
}

document.getElementById("toStart").onclick = function() {validate()};