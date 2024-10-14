const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const cover = document.querySelector('.cover');
let Ans = '';
let covered = true;
let randomBinary = Math.round(Math.random(1, 2));
function playAudio(sound) {
    let audio = new Audio(`audio/${sound}.mp3`);
    audio.play();
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (randomBinary == 1){
            playAudio("click1")
        } else if (randomBinary == 2){
            playAudio("click2")
        }
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
                Ans = display.value;
            } catch {
                display.value = 'Error';
            }
        } else if (button.textContent === '%') {
            display.value = parseFloat(display.value) / 100;
        } else if (button.textContent === 'C') {
            display.value = '';
        } else if (button.textContent === '<=') {
            display.value = display.value.slice(0, -1);
        } else if (button.textContent === 'Ans') {
            display.value += Ans;
        } else {
            display.value += button.textContent;
        }
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    } else if (key === 'Escape') {
        display.value = '';
    } else if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        display.value += key;
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === '%') {
        display.value = parseFloat(display.value) / 100;
    }
});

cover.addEventListener('click', () => {
    if (covered) {
        cover.classList.remove('slide-down');
        cover.classList.add('slide-up');
    } else {
        cover.classList.remove('slide-up');
        cover.classList.add('slide-down');
    }
    setTimeout(() => {
        covered = !covered;
    }, 2000);
});


const inputField = document.querySelector('.display');
inputField.addEventListener('input', () => {
    if (inputField.value.length > 10) {
        inputField.value = inputField.value.slice(0, 10);
    }
});
