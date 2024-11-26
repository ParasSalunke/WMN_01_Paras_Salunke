import PropsTypes from 'prop-types'

const LabelField = ({ Label }) => {
    return (
        <div>
            <label>{Label}</label>
        </div>
    )
}

LabelField.propTypes = {
    Label: PropsTypes.string
}

export default LabelField;