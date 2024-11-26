import PropsTypes from 'prop-types'

const InputField = ({ Type }) => {
    return (
        <div>
            <input type={Type} />
        </div>
    )
}

InputField.propTypes = {
    Type: PropsTypes.string
}

export default InputField;