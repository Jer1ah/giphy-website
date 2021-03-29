import React from 'react';
import { Link } from 'react-router-dom';
import giphyIcon from '../../images/giphy-logo.png';
import facebookIcon from '../../images/facebook.svg';
import appleIcon from '../../images/apple.svg';
import returnIcon from '../../images/reload.svg';
import styles from './loginPage.module.css';

const loginPage = () => {
    return (
        <div className={styles.loginPage}>
            <Link exact to="/" className={styles.heading}>
                <img src={giphyIcon} alt="Giphy Logo"/>
                <span>
                    <h1>Giphy</h1>
                    <h1>Login</h1>
                </span>
            </Link>
            <video autoPlay muted loop>
                <source src="https://media.giphy.com/login-join-backgrounds/science-lab.mp4" type="video/mp4"/>
            </video>
            <form action="#" className={styles.form}>
                <a href="#" className={styles.facebookLogin}>
                    <img src={facebookIcon} alt="Facebook Icon"/>
                    <span>Login with Facebook</span>
                </a>
                <a href="#" className={styles.appleLogin}>
                    <img src={appleIcon} alt="Apple Icon"/>
                    <span>Login with Apple</span>
                </a>
                <span className={styles.or}>Or</span>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button className={styles.submitButton}>Log In</button>
            </form>
            <Link exact to="/" className={styles.returnButton}>
                <img src={returnIcon} alt="Return Icon"/>
                <span>Return to Homepage</span>
            </Link>
        </div>
    );
};

export default loginPage;