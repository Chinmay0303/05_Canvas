const log = console.log;

log('main');

const buttons = document.querySelectorAll('button');

document.addEventListener('mouseover',mouseOverEvent);

function mouseOverEvent(event){
    if(event.target.className == 'button'){
        log(event.target);
        event.target.classList.add('over');
    }
}

document.addEventListener('mouseout',mouseOutEvent);

function mouseOutEvent(event){
    if(event.target.className == 'button over'){
        log(event.target);
        event.target.classList.remove('over');
    }
}