import PropTypes from 'prop-types';

export const contentType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string
});