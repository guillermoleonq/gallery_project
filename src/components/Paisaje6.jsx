import paisaje6 from '../assets/img/paisaje6.jpg';
import PropTypes from 'prop-types';

export const Paisaje6 = ( {className} ) => {
  return  (
    <img src={paisaje6} alt="Flores al atardecer en la tarde" 
    className={className} />
  )
}



Paisaje6.propTypes = {
    className: PropTypes.string
}