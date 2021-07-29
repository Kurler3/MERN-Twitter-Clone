import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const HomePage = () => {
    return (
        <div className="homepage">
            <FontAwesomeIcon icon={faTwitter} className="homepage-twitter-icon"/>
            <h1 className="homepage-main-title">Its What's Happening Now</h1>
            <h2 className="homepage-secondary-title">Get on Twitter today.</h2>
            <button className="homepage-register-button homepage-btn">Register</button>
            <button className="homepage-login-button homepage-btn">Login</button>
        </div>
    )
}

export default HomePage
