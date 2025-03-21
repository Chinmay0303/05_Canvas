class Circle{
    constructor(x,y,colour,size,path,hasReached){
        this.x = x;
        this.y = y;
        this.colour = colour;
        this.size = size;
        this.path = path;
        this.hasReached = hasReached;
    }

    createHead(){
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,-Math.PI/2,Math.PI/2);
        // ctx.arc(this.x,this.y,this.size, 0 , Math.PI * 2);
        ctx.fill();
    }

    createPath(){
        ctx.strokeStyle = this.colour;
        ctx.lineWidth = this.size/4;
        this.path.lineTo(this.x,this.y);
        ctx.stroke(this.path);
    }

    animate(){
        if(this.hasReached === false){

            let dirX;
            let dirY = Math.floor(Math.random() * 3) - 1;

            let bias = this.size / 12;
            let randomChance = Math.random();

            if(randomChance > bias){
                dirX = 0;
            }
            else{
                dirX = 1;
            }

            let step = 12 / this.size;

            let delY = dirY * step;
            this.y += delY;

            let delX = Math.sqrt(step ** 2 - delY ** 2);
            this.x += dirX * delX;

            if(this.y > canvas.height && this.x < canvas.width){
                this.y = canvas.height - 10;
                this.x -= 5;
            }
            if(this.y < 0 && this.x < canvas.width){
                this.y = 10;
                this.x -= 5;
            }

            if(this.x > canvas.width){
                this.hasReached = true;
            }
        }

        this.createHead();
        this.createPath();
    }
}

const n = 10;

let snakeArray = [];

for(let i = 0; i < n; i++){
    // xArray[i] = Math.random() * innerWidth;
    const x = 0;
    const y = Math.random() * canvas.height;
    const size = Math.floor(Math.random()*5 + 2) * 2;

    const red = Math.random()*255 + 60;
    const green = Math.random()*255 + 60;
    const blue = Math.random()*255 + 60;

    const colour = `rgb(${red},${green},${blue})`;
    const path = new Path2D();

    snakeArray[i] = new Circle(x,y,colour,size,path,false);
}


function motion(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    let snakesRemaining = snakeArray.filter(snake => snake.hasReached === false).length;

    for(let i = 0; i < n; i++){
        snakeArray[i].animate();
    }

    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.font = '24px serif';
    ctx.fillText(`Remaining: ${snakesRemaining}`,canvas.width - 150, canvas.height - 10);
}

setInterval(motion,25);
// motion();