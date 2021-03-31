import Operate from './Operate';

export default function Calculate({ total, next, operation }, btnName) {
  let result = total;
  let nextNum = next;
  if (btnName === '+/-') {
    result *= -1;
    nextNum *= -1;
    return { result, nextNum };
  }
  result = Operate(result, nextNum, operation);
  return { result, nextNum };
}
