import React, { useState } from 'react';
import calculate from '../logic/Calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const Calculator = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });
  const handleClick = btnName => {
    const result = calculate(state, btnName);
    setState(result);
  };

  return (
    <div className="calculate">
      <div>
        <h2>Lest do some Math!</h2>
      </div>
      <div className="calculator">
        <Display
          result={String(state.total)}
          next={String(state.next)}
          operation={state.operation}
        />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
