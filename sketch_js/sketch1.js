
ctx.clearRect(0,0,canvas.width,canvas.height);


let mouse = {
    x : Math.random() * canvas.width,
    y : Math.random() * canvas.height,
}

let initialX = mouse.x;
let initialY = mouse.y;

ctx.fillStyle = 'rgba(255, 0, 255, 1)';
ctx.beginPath();
ctx.arc(initialX,initialY,6,0,Math.PI*2);
ctx.fill();

let i = 0.2;
function createCircle(){
    ctx.fillStyle = `rgba(107, 246, 72, ${i})`;
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,6,0,Math.PI*2);
    ctx.fill();
    i += 0.005;
}

let path = new Path2D();

function animate(){
    path.moveTo(mouse.x,mouse.y);

    mouse.x += Math.random() * 21- 10;
    mouse.y += Math.random() * 21 - 10;

    if(mouse.x > canvas.width){
        mouse.x -= 10;
    }
    if(mouse.y > canvas.height){
        mouse.y -= 10;
    }
    if(mouse.x < 0){
        mouse.x += 10;
    }
    if(mouse.y < 0){
        mouse.y += 10;
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = 'rgba(255, 0, 255, 1)';
    ctx.beginPath();
    ctx.arc(initialX,initialY,6,0,Math.PI*2);
    ctx.fill();

    path.lineTo(mouse.x,mouse.y);
    ctx.strokeStyle = 'rgb(231, 244, 114)';
    ctx.lineWidth = 1;
    ctx.stroke(path);

    createCircle();
}

log('script1');

setInterval(animate,300);