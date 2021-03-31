import PropTypes from 'prop-types';

export default function Display({ result, next, operation }) {
  return (
    <div className="display">
      { (!result && next) || result }
      { operation }
      {(result && next)}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
Display.defaultProps = {
  result: '',
  next: '',
  operation: '',
};
