import PropTypes from 'prop-types';

function Button({ value, onClick }) {
    return (
        <button className="button" onClick={() => onClick(value)}>
            {value}
        </button>
    );
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;