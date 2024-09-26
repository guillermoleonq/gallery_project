import paisaje1 from '../assets/img/paisaje1.jpg';
import PropTypes from 'prop-types';

export const Paisaje1 = ( {className} ) => {
  return (
    <img src={paisaje1} alt="Caño Cristales" 
    className={className} />
  )
}

Paisaje1.propTypes = {
    className: PropTypes.string
}
