import paisaje5 from '../assets/img/paisaje5';
import PropTypes from 'prop-types';

export const Paisaje5 = ( {props} ) => {
  return (
    <img src={paisaje5} alt="Caño Cristales" 
    className={props.className} />
  )
}

Paisaje5.propTypes = {
    className: PropTypes.string
}
