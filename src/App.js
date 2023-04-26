import React from 'react';
import './style.css';
import './ligth.css';
import './script.js';

function App() {
  const addToInput = (value) => {
    document.getElementById('input').value += value;
  };

  const deleteInput = () => {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input.substring(0, input.length - 1);
  };

  const clearInput = () => {
    document.getElementById('input').value = '';
  };

  const calculateSqrt = () => {
    let input = document.getElementById('input').value;
    let result = Math.sqrt(input);
    document.getElementById('input').value = result;
  };

  const calculate = () => {
    let input = document.getElementById('input').value;
    let result = eval(input);
    document.getElementById('input').value = result;
    updateHistory(input, result);
  };
  const updateHistory = (input, result) => {
    let historyList = document.getElementById('history-list');
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(input + ' = ' + result));
    historyList.appendChild(listItem);

  }

  function switchTheme() {
    let calculatorContainer = document.querySelector('.calculator-container');
    calculatorContainer.classList.toggle('light');
  }

return (
  <div className="calculator-container">
    <h1>Calculadora Nada Científica</h1>
    <ul id="history-list"></ul>
    <input type="text" id="input" />
    <br />
    <button onClick={() => addToInput('7')}>7</button>
    <button onClick={() => addToInput('8')}>8</button>
    <button onClick={() => addToInput('9')}>9</button>
    <button onClick={() => addToInput('/')}>÷</button>
    <button onClick={() => deleteInput('')}>Back</button>
    <button onClick={() => clearInput()}>Clear</button>
    <br />
    <button onClick={() => addToInput('4')}>4</button>
    <button onClick={() => addToInput('5')}>5</button>
    <button onClick={() => addToInput('6')}>6</button>
    <button onClick={() => addToInput('*')}>x</button>
    <button onClick={() => addToInput('(')}>(</button>
    <button onClick={() => addToInput(')')}>)</button>
    <br />
    <button onClick={() => addToInput('1')}>1</button>
    <button onClick={() => addToInput('2')}>2</button>
    <button onClick={() => addToInput('3')}>3</button>
    <button onClick={() => addToInput('-')}>-</button>
    <button onClick={() => addToInput('**')}>x²</button>
    <button onClick={() => calculateSqrt()}>√</button>
    <br />
    <button onClick={() => addToInput('0')}>0</button>
    <button onClick={() => addToInput('.')}>.</button>
    <button onClick={() => addToInput('/100')}>%</button>
    <button onClick={() => addToInput('+')}>+</button>
    <button onClick={() => calculate()}>=</button>
    <button onClick={() => switchTheme()}>Tema</button>
    <br />
  </div>
);
}
export default App;
