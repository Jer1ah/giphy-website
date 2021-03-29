import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/giphy-logo.png';
import styles from './loginPage.module.css';

const loginPage = () => {
    return (
        <div className={styles.loginPage}>
            <Link exact to="/" className={styles.heading}>
                <img src={icon} alt="Giphy Logo"/>
                <span>
                    <h1>Giphy</h1>
                    <h1>Login</h1>
                </span>
            </Link>
            <video autoPlay muted loop>
                <source src="https://media.giphy.com/login-join-backgrounds/science-lab.mp4" type="video/mp4"/>
            </video>
        </div>
    );
};

export default loginPage;