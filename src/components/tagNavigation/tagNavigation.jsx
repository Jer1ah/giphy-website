import React from 'react';
import styles from './tagNavigation.module.css';

const tagNavigation = (props) => {
    return (
        <div className={styles.tagNavigation}>
            <h2 className={styles.searchTitle}>Duke</h2>
            <button className={`${styles.gifsButton} ${styles.active}`}>GIFs</button>
            <button className={styles.stickersButton}>Stickers</button>
        </div>
    );
};

export default tagNavigation;