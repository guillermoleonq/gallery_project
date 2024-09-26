import paisaje5 from '../assets/img/paisaje5.jpg';
import PropTypes from 'prop-types';

export const Paisaje5 = ( {className} ) => {
  return (
    <img src={paisaje5} alt="Caño Cristales" 
    className={className} />
  )
}

Paisaje5.propTypes = {
    className: PropTypes.string
}
