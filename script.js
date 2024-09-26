const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;
        if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else if (value === 'C') {
            display.innerText = display.innerText.slice(0, -1) || '0';
        } else if (value === 'AC') {
            display.innerText = '0';
        } else {
            if (display.innerText === '0') {
                display.innerText = '';
            }
            display.innerText += value;
        }
    });
});