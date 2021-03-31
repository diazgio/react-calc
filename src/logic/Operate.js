import Big from 'big.js';

export default function Operate(numberOne, numberTwo, op) {
  const numOne = Big(Number(numberOne));
  const numTwo = Big(Number(numberTwo));
  const minusOne = Big(-1);
  switch (op) {
    case '+':
      if (numOne < 0 && numTwo > 0) {
        return (Math.abs(numTwo) - Math.abs(numOne));
      }
      if (numTwo < 0 && numOne > 0) {
        return (Math.abs(numOne) - Math.abs(numTwo));
      }
      return numOne.plus(numTwo).toNumber();
    case '-':
      if (numOne < 0 && numTwo < 0) {
        return -(Math.abs(numTwo) + Math.abs(numOne));
      }
      if (numOne < 0 && numTwo > 0) {
        return Math.abs(numTwo) - Math.abs(numOne);
      }
      return (numOne - numTwo);
    case 'X':
      return (numOne * numTwo);
    case '÷':
      return (numOne / numTwo);
    case '%':
      return (numOne * Big(0.01));
    case '+/-':
      return (Math.abs(numOne) * Math.abs(minusOne));
    default:
      return Error;
  }
}
