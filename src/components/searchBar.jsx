import React from 'react';

import styles from '../css/searchBar.module.css';

const searchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search all GIF's and Stickers"/>
            <a href="#">$</a>
        </div>
    );
};

export default searchBar;