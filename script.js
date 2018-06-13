var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var rectangle_height = 25;
    var rectangle_width = 25;
    var x = 0;
    var y = 0;
    var z = 300;
    var a = 300;
    var r_press = false;
    var l_press = false;
    var u_press = false;
    var d_press = false;

    var object_1={
        x1: 100,
        x2: 20,
        y1: 40,
        y2: 30,
    }

function keydownhandler(e){
    if(e.keyCode == 37){
    l_press = true;
    }
    else if(e.keyCode == 38){
    u_press = true;
    }
    else if(e.keyCode == 39){
    r_press = true;
    }
    else if(e.keyCode == 40){
    d_press = true;
    }
}

function keyuphandler(e){
    if(e.keyCode == 37){
    l_press = false;
    }
    else if(e.keyCode == 38){
    u_press = false;
    }
    else if(e.keyCode == 39){
    r_press = false;
    }
    else if(e.keyCode == 40){
    d_press = false;
    }
}

function drawbox(){
ctx.beginPath();
ctx.rect(x, y, 30, 30);
ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(object_1.x1, object_1.x2, object_1.y1, object_1.y2);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(z, a, 40, 40);
ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
ctx.stroke();
ctx.closePath();
}

function draw(){
    ctx.clearRect(0,0,650,650);
    drawbox();
    if(r_press && x+rectangle_width<650){
        if(!(x<70 && x>20 && y>40 && y<90)){
          /*  x = x;
        }
        else{*/
            x += 1;  
        }
       
    }
    else if(l_press && x>0){
        if(!(x<70 && x>20 && y>40 && y<90)){
         /*   x = x;
        }
        else{*/
        x -= 1;
        }
    }
    else if(u_press && y>0){
        if(!(x<70 && x>20 && y>40 && y<90)){
         /*   y = y;
        }
        else{*/
        y -= 1;
        }
    }
    else if(d_press && y+rectangle_height<650){
        if(!(x<70 && x>20 && y>40 && y<90)){
         /*   y = y;
        }
        else{*/
        y += 1;
        }
    }
}

function collision (){
if (x < z + 40 && x + 30 > z && y < a + 40 && y + 30 > a) {
    x = 0, y = 0;
}
}

document.addEventListener("keydown", keydownhandler, false)
document.addEventListener("keyup", keyuphandler, false)
setInterval(draw,5);