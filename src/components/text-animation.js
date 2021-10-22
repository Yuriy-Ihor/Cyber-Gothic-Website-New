// import {$, fadeOut, fadeIn} from 'jquery';

function spawnText(textBlockId, textClass='text', timeout=1500) {
    const block = document.getElementById(textBlockId);
    const blocks = document.getElementsByClassName(textClass);
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].classList.contains('fade-in')) {
            blocks[i].classList.add('fade-out');
        }
    }
    
    setTimeout(
        () => {
            block.classList.remove('fade-out');
            block.classList.remove('instant-fade-out');
            block.classList.add('fade-in');
        }, timeout
    );
}

function despawnText(textBlockId) {
    const block = document.getElementById(textBlockId);
    block.classList.remove('fade-in');
    block.classList.add('fade-out') ;
}

function despawnAll(textClass='text') {
    const blocks = document.getElementsByClassName(textClass);
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList.add('instant-fade-out');
    }
}

export {spawnText, despawnText, despawnAll};