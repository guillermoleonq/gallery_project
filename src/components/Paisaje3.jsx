import paisaje3 from '../assets/img/paisaje3';
import PropTypes from 'prop-types';

export const Paisaje3 = ( {props} ) => {
    return (
      <img src={paisaje3} alt="Caño Cristales" 
      className={props.className} />
    )
  }

Paisaje3.propTypes = {
    className: PropTypes.string
}

