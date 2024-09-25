import paisaje2 from '../assets/img/paisaje2';
import PropTypes from 'prop-types';

export const Paisaje2 = ( {props} ) => {
    return (
        <img src={paisaje2} alt="Caño Cristales" 
        className={props.className} />
    )
}

Paisaje2.propTypes = {
    className: PropTypes.string
}

