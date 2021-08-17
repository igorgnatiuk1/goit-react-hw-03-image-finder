
import propTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onClick}) => (
    <button type="button" className={style.button} onClick={onClick}>
        Load more
    </button>
);

Button.propTypes = {
    onClick: propTypes.func.isRequired,
};
export default Button;