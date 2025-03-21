const log = console.log;

log('main');

const buttons = document.querySelectorAll('.button');

const mainContainer = document.querySelector('.main-container');

const canvasDiv = document.createElement('div');
canvasDiv.setAttribute('class','canvas-div');

    const crossDiv = document.createElement('div');
    crossDiv.setAttribute('class','cross-div');

        const crossButton = document.createElement('button');
        crossButton.setAttribute('class','cross-button');
        crossButton.textContent = 'x';

    crossDiv.appendChild(crossButton);

canvasDiv.appendChild(crossDiv);

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id','main-canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight/1.5;
    canvas.width = window.innerWidth/1.75;


    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    canvasDiv.appendChild(canvas);

document.addEventListener('mouseover',mouseOverEvent);

function mouseOverEvent(event){
    if(event.target.className == 'button' || event.target.className == 'cross-button'){
        event.target.classList.add('over');
    }
}

document.addEventListener('mouseout',mouseOutEvent);

function mouseOutEvent(event){
    if(event.target.className == 'button over' || event.target.className == 'cross-button over'){
        event.target.classList.remove('over');
    }
}

document.addEventListener('click',clickEvent);

function clickEvent(event){
    if(event.target.className == 'button over'){
        // log(event.target);
        mainContainer.appendChild(canvasDiv);

        let scriptElement1 = document.createElement('script');

        if(event.target.id == 'button-1'){
                // log(event.target.id);
                scriptElement1.src = './sketch_js/sketch1.js';
        }
        else if(event.target.id == 'button-2'){
                // log(event.target.id);
                scriptElement1.src = './sketch_js/sketch2.js';
        }
        else if(event.target.id == 'button-3'){
                // log(event.target.id);
                scriptElement1.src = './sketch_js/sketch3.js';
        }
        else if(event.target.id == 'button-4'){
                // log(event.target.id);
                scriptElement1.src = './sketch_js/sketch4.js';
        }
        else if(event.target.id == 'button-5'){
                // log(event.target.id);
                scriptElement1.src = './sketch_js/sketch5.js';
        }
        document.body.appendChild(scriptElement1);
        disableButtons();
    }
    else if(event.target.className == 'cross-button over'){
        // log(event.target);
        event.target.classList.remove('over');
        location.reload();
    }
}

function disableButtons(){
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
    });
}