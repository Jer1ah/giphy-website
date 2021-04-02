import React from 'react';
import { Link } from 'react-router-dom';

import giphyLogo from '../../images/giphy-logo.png';
import userIcon from '../../images/user.svg';

import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <Link to="/" className={styles.logo}>
                <img src={giphyLogo} alt="Giphy logo"/>
                <h5>GIPHY</h5>
            </Link>
            <ul className={styles.navigation__list}>
                <li className={styles.navigation__listItem}>
                    <Link to="/reactions">Reactions</Link>
                    <div className={styles.background}></div>
                </li>
                <li className={styles.navigation__listItem}>
                    <Link to="/entertainment">Entertainment</Link>
                    <div className={styles.background}></div>
                </li>
                <li className={styles.navigation__listItem}>
                    <Link to="/sports">Sports</Link>
                    <div className={styles.background}></div>
                </li>
                <li className={styles.navigation__listItem}>
                    <Link to="/stickers">Stickers</Link>
                    <div className={styles.background}></div>
                </li>
                <li className={styles.navigation__listItem}>
                    <Link to="/artist">Artist</Link>
                    <div className={styles.background}></div>
                </li>
                <li className={styles.navigation__listItem}>
                    <Link to="/artist">:</Link>
                    <div className={styles.background}></div>
                </li>
            </ul>
            <div className={styles.contentWrapper}>
                <Link to="/upload" className={styles.uploadButton}>Upload</Link>
                <Link to="/create" className={styles.createButton}>Create</Link>
            </div> 
            <Link to="/login" className={styles.logInButton}>
                <span><img src={userIcon} alt="User icon"/></span>
                <h5>Log In</h5>
            </Link>
        </nav>
    );
};

export default Navigation;