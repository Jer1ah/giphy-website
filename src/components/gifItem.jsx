import React from 'react';

import styles from '../css/gifItem.module.css';

const gifItem = ({ gif }) => {
    return (
        <li className={styles.gifItem}>
            <img src={gif} alt="Gif Description"/>
        </li>
    );
};

export default gifItem;

