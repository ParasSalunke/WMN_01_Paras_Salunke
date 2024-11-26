import PropsTypes from 'prop-types'

const SubmitButton = ({ Type, Title }) => {
    return (
        <div>
            <button type={Type}>{Title}</button>
        </div>
    )
}

SubmitButton.propTypes = {
    Type: PropsTypes.string,
    Title: PropsTypes.string
}

export default SubmitButton;