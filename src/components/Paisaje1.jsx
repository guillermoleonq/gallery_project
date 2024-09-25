import paisaje1 from '../assets/img/paisaje1';
import PropTypes from 'prop-types';

export const Paisaje1 = ( {props} ) => {
  return (
    <img src={paisaje1} alt="Caño Cristales" 
    className={props.className} />
  )
}

Paisaje1.propTypes = {
    className: PropTypes.string
}
