import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const LoginPage = () => {

    const [isFormFilled, setIsFormFilled] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailInputChange = (e) => {
        setEmail(e.target.value);
        console.log(email);

        // Whenever this is changed check if both inputs are filled 
        if(email!== '' && password!=='') setIsFormFilled(true);
        else setIsFormFilled(false);
    }

    const onPasswordInputChange = (e) => {
        setPassword(e.target.value);
        console.log(password);

        // Whenever this is changed check if both inputs are filled 
        if(email!=='' && password!=='') setIsFormFilled(true);
        else setIsFormFilled(false);
    }

    const onLoginBtnClicked = (e) => {
        // Try to log in 
    }

    return (
        <div className='login-page'>
            <FontAwesomeIcon icon={faTwitter} className="login-page-twitter-icon"/>
            <h1 className="login-page-main-title">Login on Twitter</h1>
            <form action="get" className="login-page-form">
                <input className="login-page-form-email login-page-form-input" type="email" id="email" name="email" placeholder="Email" onChange={onEmailInputChange}/>
                <br />
                <input className="login-page-form-password login-page-form-input" type="password" id="password" name="password" placeholder="Password" onChange={onPasswordInputChange}/>
            </form>
            <button className={isFormFilled ? 'login-page-usable-btn' : 'login-page-unusable-btn'} disabled={!isFormFilled} onClick={onLoginBtnClicked}>
                Login
            </button>
            <div className="login-page-help-texts-container">
                <p className="login-page-help-texts-container-text">Forgot your password?</p>
                <p>|</p>
                <p className="login-page-help-texts-container-text">Register on Twitter</p>
            </div>
        </div>
    )
}

export default LoginPage
