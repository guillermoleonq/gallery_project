import paisaje6 from '../assets/img/paisaje6';
import PropTypes from 'prop-types';

export const Paisaje6 = ( {props} ) => {
  return (
    <img src={paisaje6} alt="Caño Cristales" 
    className={props.className} />
  )
}

Paisaje6.propTypes = {
    className: PropTypes.string
}