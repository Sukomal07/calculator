const display = document.getElementById('display')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multBtn = document.getElementById('mult')
const divisionBtn = document.getElementById('division')
const dot = document.getElementById('dot')
const deleteBtn = document.getElementById('delete')
const resetBtn = document.getElementById('reset')
const equalBtn = document.getElementById('equal')

let currentInput = ''

function updateDisplay(value) {
    //avoid start with an operator
    if (currentInput === '' && '+*-/'.includes(value)) {
        return
    }
    //avoid multiple decimal points
    if (value === '.' && currentInput.includes('.')) {
        return
    }
    // Avoid consecutive operators
    if ('+-*/'.includes(currentInput.slice(-1)) && '+-*/'.includes(value)) {
        return
    }
    currentInput += value
    display.textContent = currentInput
}

deleteBtn.addEventListener('click', function () {
    currentInput = currentInput.slice(0, -1)
    display.textContent = currentInput
})

resetBtn.addEventListener('click', function () {
    currentInput = ''
    display.textContent = ''
})

equalBtn.addEventListener('click', () => {
    try {
        const result = eval(currentInput);
        if (result === undefined || isNaN(result)) {
            display.textContent = 'Invalid expression';
        } else if (result === Infinity || result === -Infinity) {
            display.textContent = 'Error: Division by zero';
        } else {
            display.textContent = result;
            currentInput = result.toString();
        }
    } catch (error) {
        display.textContent = 'Error';
    }
});


zero.addEventListener('click', () => updateDisplay('0'))
one.addEventListener('click', () => updateDisplay('1'))
two.addEventListener('click', () => updateDisplay('2'))
three.addEventListener('click', () => updateDisplay('3'))
four.addEventListener('click', () => updateDisplay('4'))
five.addEventListener('click', () => updateDisplay('5'))
six.addEventListener('click', () => updateDisplay('6'))
seven.addEventListener('click', () => updateDisplay('7'))
eight.addEventListener('click', () => updateDisplay('8'))
nine.addEventListener('click', () => updateDisplay('9'))

plusBtn.addEventListener('click', () => updateDisplay('+'))
minusBtn.addEventListener('click', () => updateDisplay('-'))
multBtn.addEventListener('click', () => updateDisplay('*'))
divisionBtn.addEventListener('click', () => updateDisplay('/'))
dot.addEventListener('click', () => updateDisplay('.'))