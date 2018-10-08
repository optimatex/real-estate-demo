import PropTypes from 'prop-types';

export default PropTypes.shape({
  owner: PropTypes.string.isRequired,
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string,
    line3: PropTypes.string,
    line4: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  airbnbId: PropTypes.number.isRequired,
  numberOfBedrooms: PropTypes.number.isRequired,
  numberOfBathrooms: PropTypes.number.isRequired,
  incomeGenerated: PropTypes.number.isRequired,
});
