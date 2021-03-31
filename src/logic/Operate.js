import Big from 'big.js';

export default function Operate(numberOne, numberTwo, op) {
  const numOne = Big(Number(numberOne));
  const numTwo = Big(Number(numberTwo));
  let result = new Big();
  switch (op) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    case '÷':
      result = numOne / numTwo;
      break;
    case '%':
      result = Math.floor(numOne / 100);
      break;
    default:
  }
  return result;
}
