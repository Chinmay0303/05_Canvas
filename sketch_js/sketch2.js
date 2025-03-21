class Circle{
    constructor(x,y,colour,size){
        this.x = x;
        this.y = y;
        this.colour = colour;
        this.size = size;
    }

    createCircle(){
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
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
    }
}

const n = 50;

const circleArray = [];

for(let i = 0; i < n; i++){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.floor(Math.random()*10) + 3;

    let red = Math.random()*255 + 60;
    let green = Math.random()*255 + 60;
    let blue = Math.random()*255 + 60;

    let colour = `rgb(${red},${green},${blue})`;

    circleArray[i] = new Circle(x,y,colour,size);
    circleArray[i].createCircle();
}


function motion(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

        for(let i = 0; i < n; i++){
            circleArray[i].animate();
        }
}

log('script2');

setInterval(motion,150);