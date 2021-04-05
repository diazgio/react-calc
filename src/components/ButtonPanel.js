import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({
  group1, group2, group3, group4, group5, clickHandler,
}) {
  return (
    <div className="buttonPanel">
      <div className="buttonDiv">
        {group1.map(item => (
          <Button name={item} key={item} onClick={clickHandler} />
        ))}
      </div>
      <div className="buttonDiv">
        {group2.map(item => (
          <Button name={item} key={item} onClick={clickHandler} />
        ))}
      </div>
      <div className="buttonDiv">
        {group3.map(item => (
          <Button name={item} key={item} onClick={clickHandler} />
        ))}
      </div>
      <div className="buttonDiv">
        {group4.map(item => (
          <Button name={item} key={item} onClick={clickHandler} />
        ))}
      </div>
      <div className="buttonDiv">
        {group5.map(item => (
          <Button name={item} key={item} onClick={clickHandler} />
        ))}
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  group1: PropTypes.arrayOf(PropTypes.string),
  group2: PropTypes.arrayOf(PropTypes.string),
  group3: PropTypes.arrayOf(PropTypes.string),
  group4: PropTypes.arrayOf(PropTypes.string),
  group5: PropTypes.arrayOf(PropTypes.string),
  clickHandler: PropTypes.func.isRequired,
};

ButtonPanel.defaultProps = {
  group1: ['AC', '+/-', '%', '÷'],
  group2: ['7', '8', '9', 'X'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.', '='],
};
