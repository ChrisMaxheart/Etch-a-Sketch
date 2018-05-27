let row = 2;
let column = 10;

for (let i = 0; i < row; i++) {
  let par = document.createElement("div");
  par.className = "color row";
  for (let j = 0; j < column; j++) {
    let counter = i*column + j+1;
    let chi = document.createElement("button");
    chi.className = "color button";
    chi.id = "color"+counter;
    par.appendChild(chi);
  }
  document.getElementById("choose_color").appendChild(par);
}


let colorList = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#000000"];

let color_memory = "#000000";

let total = row * column;

function change_color_memo(newcolor) {
  color_memory = newcolor;
  // console.log(color_memory);
}

function change_color(mybutton, color) {
  mybutton.style.backgroundColor = color;
}

for (let i = 0; i < total; i++) {
  let myId = "color"+(i+1);
  // console.log(myId);
  document.getElementById(myId).style.backgroundColor = colorList[i];
  document.getElementById(myId).onclick = function(){change_color_memo(colorList[i])};
}

let mouse_check = 0;

function start(row, column) {
  for (let i = 0; i < row; i++) {
    let dummy = document.createElement("div")
    dummy.style.display = "grid";
    dummy.style.setProperty("grid-template-columns", "repeat("+column+",1fr)");
    for (let j = 0; j < column; j++) {
      let but = document.createElement("button");
      but.className = "game button";

      but.onmousemove = function(){if (mouse_check){change_color(but, color_memory)}};
      but.onclick = function(){change_color(but, color_memory)};
      but.touchmove = function(){change_color(but, color_memory)};
      dummy.appendChild(but);
    }
    document.getElementById("main_area").appendChild(dummy);
  }
}

document.onmousedown = function(){mouse_check = 1};
document.onmouseup = function(){mouse_check = 0};

window.onload = function() {
  let l = localStorage.getItem("length");
  let w = localStorage.getItem("width");
  start(w, l);
}