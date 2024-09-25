import paisaje4 from '../assets/img/paisaje4';
import PropTypes from 'prop-types';

export const Paisaje4 = ( {props} ) => {
    return (
      <img src={paisaje4} alt="Caño Cristales" 
      className={props.className} />
    )
  }

Paisaje4.propTypes = {
    className: PropTypes.string
}