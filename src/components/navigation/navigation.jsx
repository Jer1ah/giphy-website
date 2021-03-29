import React from 'react';
import { Link } from 'react-router-dom';

import giphyLogo from '../../images/giphy-logo.png';
import userIcon from '../../images/user.svg';

import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <a href="#" className={styles.logo}>
                <img src={giphyLogo} alt="Giphy logo"/>
                <h5>GIPHY</h5>
            </a>
            <ul className={styles.navigation__list}>
                <li className={styles.navigation__listItem}>
                    <Link to="/reactions">Reactions</Link>
                </li>
                <li className={styles.navigation__listItem}>
                    <Link to="/entertainment">Entertainment</Link>
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
            <div className={styles.contentWrapper}>
                <a href="#" className={styles.uploadButton}>Upload</a>
                <a href="#" className={styles.createButton}>Create</a>
            </div> 
            <Link to="/login" className={styles.logInButton}>
                <span><img src={userIcon} alt="User icon"/></span>
                <h5>Log In</h5>
            </Link>
        </nav>
    );
};

export default Navigation;