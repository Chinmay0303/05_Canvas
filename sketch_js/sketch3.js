const snowRect = {
    x: 0,
    y: canvas.height,
    width: canvas.width,
    height: 0,
}

class Circle{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    createCircle(){
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }

    animate(){
        let dirX = Math.floor(Math.random() * 3) - 1;
        let dirY = Math.floor(Math.random() * 5);

        this.x += Math.floor(Math.random() * 3) * dirX;
        this.y += Math.floor(Math.random() * 7) * dirY;

        // toroid
        this.x = (this.x + canvas.width) % canvas.width;
        this.y = (this.y + canvas.height) % canvas.height;
        this.createCircle();
    }
}

const n = 300;

const circleArray = [];

for(let i = 0; i < n; i++){
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.floor(Math.random()*4) + 1;

    circleArray[i] = new Circle(x,y,size);
    circleArray[i].createCircle();
}

function motion(){
    // tracer effect
    ctx.fillStyle = 'rgba(8, 0, 29, 0.7)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(snowRect.x, snowRect.y, snowRect.width, snowRect.height);
    snowRect.height += 0.5;
    snowRect.y -= 0.5;

    // ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

        for(let i = 0; i < n; i++){
            circleArray[i].animate();
        }
}

setInterval(motion,150);