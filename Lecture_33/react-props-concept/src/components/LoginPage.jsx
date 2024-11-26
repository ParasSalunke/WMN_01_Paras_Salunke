import InputField from './InputField'
import LabelField from './LabelField'
import SubmitButton from './SubmitButton'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">Login Form Using React Props</h1>
            <div className="login-field">
                <LabelField Label='Email' />
                <InputField Type='email' />
            </div>
            <div className="login-field">
                <LabelField Label='Password' />
                <InputField Type='password' />
            </div>
            <SubmitButton Type='submit' Title='Login' />
        </div>
    )
}

export default LoginPage;