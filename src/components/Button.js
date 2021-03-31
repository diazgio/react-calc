import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, onClick }) {
  return (
    <button type="button" name={name} onClick={() => { onClick(name); }}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
