function addToInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function deleteInput() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input.substring(0, input.length - 1);
}

function calculate() {
    let input = document.getElementById('input').value;
    let result = eval(input);
    document.getElementById('input').value = result;
    updateHistory(input, result);
}
function calculateSqrt() {
    let input = document.getElementById('input').value;
    let result = Math.sqrt(input);
    document.getElementById('input').value = result;
}
function updateHistory(input, result) {
    let historyList = document.getElementById('history-list');
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(input + ' = ' + result));
    historyList.appendChild(listItem);
}
function switchTheme() {
    let calculatorContainer = document.querySelector('.calculator-container');
    calculatorContainer.classList.toggle('light');
}
