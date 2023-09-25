'use stric';

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button=> {
    button.addEventListener('click', function(event) {
        const id = event.target.id;
        if(id == 'black') {
            document.querySelectorAll('.heading').forEach(head=> head.style.color = 'white');
        }
        body.style.backgroundColor = id;
    })
})