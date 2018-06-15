var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var h = 20;
var w = 20;
var x = 0;
var y = 0;

var object_1 = {
  x1: 100,
  x2: 100,
  y1: 50,
  y2: 50
};

function keydownhandler(e) {
  switch (e.keyCode) {
    case 37:
    console.log("I reach here")
    if(x>0){
        console.log("I reach here 2")
        if(!(x<object_1.x1+object_1.y1 && y+h>object_1.x2 && y<object_1.x2+object_1.y2)){
                x -= 10;
        }
    }
      break;

    case 38:
    if(y>0){
        if(!(y<object_1.x2+object_1.y2 && x+w>object_1.x1 && x<object_1.x1+object_1.y1)){
        y -= 10;
        }
    }
      break;

    case 39:
    if(x+w<650){
        if(!(x+w>object_1.x1 && y+h>object_1.x2 && y<object_1.x2+object_1.y2)){
          x += 10;  
       }
    }

      break;
    case 40:
    if(y+h<650){
        if(!(y+h>object_1.x2 && x+w>object_1.x1 && x<object_1.x1+object_1.y1)){
        y += 10;
        }
    }
      break;
  }
  draw();
}

function drawbox() {
  ctx.beginPath();
  ctx.rect(x, y, h, w);
  ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(object_1.x1, object_1.x2, object_1.y1, object_1.y2);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, 650, 650);
  drawbox();
}

document.addEventListener("keydown", keydownhandler, false);
draw();
