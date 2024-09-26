import paisaje3 from '../assets/img/paisaje3.jpg';
import PropTypes from 'prop-types';

export const Paisaje3 = ( {className} ) => {
    return (
      <img src={paisaje3} alt="Caño Cristales" 
      className={className} />
    )
  }

Paisaje3.propTypes = {
    className: PropTypes.string
}

