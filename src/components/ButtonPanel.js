import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({
  group1, group2, group3, group4, group5,
}) {
  return (
    <div>
      <div>
        {group1.map(item => (
          <Button name={item} key={item} />
        ))}
      </div>
      <div>
        {group2.map(item => (
          <Button name={item} key={item} />
        ))}
      </div>
      <div>
        {group3.map(item => (
          <Button name={item} key={item} />
        ))}
      </div>
      <div>
        {group4.map(item => (
          <Button name={item} key={item} />
        ))}
      </div>
      <div>
        {group5.map(item => (
          <Button name={item} key={item} />
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
};

ButtonPanel.defaultProps = {
  group1: ['AC', '+/-', '%', '÷'],
  group2: ['7', '8', '9', 'X'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.', '='],
};
