import React from 'react';
import { connect } from 'react-redux';
import styles from './tagNavigation.module.css';

const tagNavigation = (props) => {
    return (
        <div className={styles.tagNavigation}>
            <h2 className={styles.searchTitle}>{props.searchTerm}</h2>
            <button className={`${styles.gifsButton} ${styles.active}`}>GIFs</button>
            <button className={styles.stickersButton}>Stickers</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateToProps)(tagNavigation);