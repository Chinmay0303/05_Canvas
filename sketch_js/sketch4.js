const vRect = {
    x: canvas.width/2 - 5,
    y: canvas.height/2 - 5,
    dim: 10,
}

class Circle{
    constructor(x,y,colour,size,isAlive){
        this.x = x;
        this.y = y;
        this.colour = colour;
        this.size = size;
        this.isAlive = isAlive;
    }

    createCircle(){
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }

    killCircle(){
        this.size -= 1;
        if(this.size <= 0){
            this.isAlive = false;
        }
    }

    animate(){
        let dirX = Math.floor(Math.random() * 3) - 1;
        let dirY = Math.floor(Math.random() * 3) - 1;

        this.x += Math.floor(Math.random() * 11) * dirX;
        this.y += Math.floor(Math.random() * 11) * dirY;

        // toroid
        this.x = (this.x + canvas.width) % canvas.width;
        this.y = (this.y + canvas.height) % canvas.height;
        this.createCircle();

        // if full circle is inside void
        if(this.x >= vRect.x + this.size/2 && this.x <= vRect.x + vRect.dim - this.size/2 
        && this.y >= vRect.y + this.size/2 && this.y <= vRect.y + vRect.dim - this.size/2
        ){
            this.killCircle();
        }
    }
}

const n = 100;

let circleArray = [];

for(let i = 0; i < n; i++){
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.floor(Math.random()*11) + 3;

    const red = Math.random()*240 + 40;
    const green = Math.random()*240 + 40;
    const blue = Math.random()*240 + 40;

    const colour = `rgb(${red},${green},${blue})`;

    circleArray[i] = new Circle(x,y,colour,size,true);
}


function motion(){
    // tracer effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(vRect.x, vRect.y, vRect.dim, vRect.dim);
    vRect.dim += 1;
    vRect.x -= 0.5;
    vRect.y -= 0.5;

    // ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

    circleArray = circleArray.filter(circle => circle.isAlive);

        for(let i = 0; i < circleArray.length; i++){
                circleArray[i].animate();
        }

        const counter = circleArray.length;

        ctx.fillStyle = 'rgb(60, 255, 0)';
        ctx.font = "36px serif";
        ctx.fillText(`${counter}`, canvas.width - 60, canvas.height - 20);
}

setInterval(motion,150);