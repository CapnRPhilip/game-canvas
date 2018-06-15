var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var h = 20;
var w = 20;
var x = 0;
var y = 0;
var a = ""
var b = ""

var object_1 = {
  x1: 100,
  x2: 100,
  side: 50
};

function keydownhandler(e) {

  switch (e.keyCode) {
    
    case 37:
      if (x > 0) {
        console.log("LEFT");
        console.log('y > object_1.x2+object_1.side : ', y > object_1.x2+object_1.side);
        console.log("y < object_1.x2 : ", y < object_1.x2);
        console.log('y : ',y )
        console.log('!(y > object_1.x2+object_1.side || y < object_1.x2 ) : ',!(y > object_1.x2+object_1.side || y < object_1.x2 ) )
        if(!(y > object_1.x2+object_1.side || y < object_1.x2 )){
          if(!(x == object_1.x1 + object_1.side)){
            x-=10
          }
        } else {
          x-=10
        }
        
        
      }
      break;

    case 38:
      if (y > 0) {
        console.log("UP");
        if (
          !(
            y < object_1.x2 + object_1.side &&
            x + w > object_1.x1 &&
            x < object_1.x1 + object_1.side
          )
        ) {
          y -= 10;
        }
      }
      break;

    case 39:
      if (x + w < 650) {
        console.log("RIGHT");
        if (
          !(
            x + w > object_1.x1 &&
            y + h > object_1.x2 &&
            y < object_1.x2 + object_1.side
          )
        ) {
          x += 10;
        }
      }

      break;
    case 40:
      if (y + h < 650) {
        console.log("DOWN");
        if (
          !(
            y + h > object_1.x2 &&
            x + w > object_1.x1 &&
            x < object_1.x1 + object_1.side
          )
        ) {
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
  a = ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  b = ctx.rect(object_1.x1, object_1.x2, object_1.side, object_1.side);
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
