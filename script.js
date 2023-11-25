function onDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearScreen() {
    document.getElementById('display').value = '';
  }

  function result() {
    const input = document.getElementById('display').value;

    if (isValidInput(input)) {
      const result = evaluateExpression(input);

      if (Number.isFinite(result)) {
        document.getElementById('display').value = result;
      } 
  }

  function isValidInput(input) {
    return /^[\d\+\-\*\/\.\(\)]+$/.test(input);
  }

  function evaluateExpression(input) {
    return Function(`'use strict'; return (${input})`)();
  }
  }
