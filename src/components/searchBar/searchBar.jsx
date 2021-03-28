import React from 'react';

import styles from './searchBar.module.css';

import searchIcon from '../../images/search.svg';

const searchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search all GIF's and Stickers"/>
            <a href="#"><img src={searchIcon} alt="Search icon"/></a>
        </div>
    );
};

export default searchBar;