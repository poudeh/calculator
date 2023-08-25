let displayCalc = document.querySelector('#displayResult')
let flag = false

function addToCalculator(Numbers) {
    displayCalc.value += Numbers
    if (flag) {
        let numbers = displayCalc.value.split('^')
        displayCalc.value = Math.pow(numbers[0], numbers[1])
        flag = false

    }

}

function result() {
    displayCalc.value = eval(displayCalc.value)

}

function mathCalculator(operator) {
    if (operator == 'pow') {
        displayCalc.value += '^'
        flag = true

    } else {
        let value = displayCalc.value
        displayCalc.value = Math[operator](value)
    }



}