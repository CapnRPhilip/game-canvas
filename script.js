var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var h = 30;
var w = 30;
var x = 0;
var y = 0;
var r_press = false;
var l_press = false;
var u_press = false;
var d_press = false;

var object_1 = {
  x1: 100,
  x2: 20,
  y1: 40,
  y2: 30
};

function keydownhandler(e) {
  switch (e.keyCode) {
    case 37:
      x -= 10;
      break;
    case 38:
      y -= 10;
      break;
    case 39:
      console.log(x);
      x + w > 400 || x + w == 400 ? null : (x += 10);

      break;
    case 40:
      y + h > 400 || y + h == 400 ? null : (y += 10);
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
  ctx.clearRect(0, 0, 400, 400);
  drawbox();
}

document.addEventListener("keydown", keydownhandler, false);
draw();
