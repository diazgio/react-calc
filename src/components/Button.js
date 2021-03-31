import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, key }) {
  return (
    <button type="button" name={name} key={key}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
