import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTitle, getGifList } from '../../actions';

import giphyLogo from '../../images/giphy-logo.png';
import userIcon from '../../images/user.svg';
import menuIcon from '../../images/menu.svg';

import styles from './navigation.module.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.mobileMenu = React.createRef();
        this.dropdown = React.createRef();
    }

    onButtonClick = (event) => {
        this.props.getTitle(event.target.innerHTML);
        this.props.getGifList(event.target.innerHTML);
    }

    onMenuButtonClick = () => {
        this.mobileMenu.current.style.display = "flex";
        this.dropdown.current.style.transform = 'scaleY(175)';
    }

    render() {
        return (
            <nav className={styles.navigation}>
                <Link to="/" className={styles.logo}>
                    <img src={giphyLogo} alt="Giphy logo"/>
                    <h5>GIPHY</h5>
                </Link>
                <div className={styles.mobileNav} ref={this.mobileMenu}>
                    <ul className={styles.navigation__list}>
                        <li className={styles.navigation__listItem}>
                            <Link to="/giflist" onClick={this.onButtonClick}
                            >Reactions</Link>
                            <div className={styles.background}></div>
                        </li>
                        <li className={styles.navigation__listItem}>
                            <Link to="/giflist" onClick={this.onButtonClick}
                            >Entertainment</Link>
                            <div className={styles.background}></div>
                        </li>
                        <li className={styles.navigation__listItem}>
                            <Link to="/giflist" onClick={this.onButtonClick}>Sports</Link>
                            <div className={styles.background}></div>
                        </li>
                        <li className={styles.navigation__listItem}>
                            <Link to="/stickers">Stickers</Link>
                            <div className={styles.background}></div>
                        </li>
                        <li className={styles.navigation__listItem}>
                            <Link to="/giflist" onClick={this.onButtonClick}>Artist</Link>
                            <div className={styles.background}></div>
                        </li>
                    </ul>
                    <div className={styles.contentWrapper}>
                        <a href="https://giphy.com/create/gifmaker" target="_blank" rel="noreferrer" className={styles.uploadButton}>Upload</a>
                        <a href="https://giphy.com/upload" target="_blank" rel="noreferrer" className={styles.createButton}>Create</a>
                    </div> 
                    <Link to="/login" className={styles.logInButton}>
                        <span><img src={userIcon} alt="User icon"/></span>
                        <h5>Log In</h5>
                    </Link>
                </div>
                <img 
                    src={menuIcon} 
                    alt="Menu Icon" 
                    className={styles.menuButton}
                    onClick={this.onMenuButtonClick}
                />
                <div className={styles.dropdown} ref={this.dropdown}></div>
            </nav>
        );
    }
};

export default connect(null, {
    getTitle,
    getGifList
})(Navigation);