const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});