import React from 'react';

import giphyLogo from '../images/giphy-logo.png';

import styles from '../css/navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <a href="#" className={styles.navigation__logo}>
                <img src={giphyLogo} alt="Giphy logo"/>
                <h5>GIPHY</h5>
            </a>
            <ul className={styles.navigation__list}>
                <li className={styles.navigation__listItem}>
                    <a href="#">Reactions</a>
                </li>
                <li className={styles.navigation__listItem}>
                    <a href="#"></a>
                </li>
                <li className={styles.navigation__listItem}>
                    <a href="#">Sports</a>
                </li>
                <li className={styles.navigation__listItem}>
                    <a href="#">Stickers</a>
                </li>
                <li className={styles.navigation__listItem}>
                    <a href="#">Artist</a>
                </li>
                <li className={styles.navigation__listItem}>
                    <a href="#">:</a>
                </li>
            </ul>
            <div className="navigation__content-wrapper">
                <a href="#" className="upload-button">Upload</a>
                <a href="#" className="create-button">Create</a>
            </div> 
            <a href="#" className="login-button">Log In</a>
        </nav>
    );
};

export default Navigation;