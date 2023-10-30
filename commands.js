const screen = document.getElementById("screen");

//Segundo Numero
let currentOperand;
//Operação atual
let currentOperation = null;
//primeiro num
let previousOperand = "";
//limpar a tela depois de um número armazenado
let cleanNextNum = false;
//resultado
let result;

function addNumber(number) {
  if (cleanNextNum) {
    //limpa a tela e continua a adicionar os numeros
    screen.value = number;
    cleanNextNum = false;
  } else {
    //se vazio add num ou add number ao numb existente
    screen.value = screen.value === "0" ? number : screen.value + number;
  }
}

function addDecimal() {
  //retorna um booleano se existe ou não o determinado elemento no number
  if (!screen.value.includes(".")) {
    screen.value += ".";
  }
}

function setOperation(operator) {
  previousOperand = screen.value;
  currentOperation = operator;
  cleanNextNum = true;
}

function calculate() {
  currentOperand = screen.value;
  //conversores de String para Numeros
  const prevNum = parseFloat(previousOperand);
  const currentNum = parseFloat(currentOperand);

  switch (currentOperation) {
    case "+":
      result = prevNum + currentNum;
      break;
    case "-":
      result = prevNum - currentNum;
      break;
    case "*":
      result = prevNum * currentNum;
      break;
    case "/":
      if (currentNum === 0) {
        alert("Não é possível dividir por zero.");
        return;
      }
      result = prevNum / currentNum;
      break;
  }

  screen.value = String(result);
  currentOperation = null;
  cleanNextNum = true;
}

function clearScreen() {
  screen.value = "0";
  currentOperation = null;
  previousOperand = "";
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1) || "0";
}
