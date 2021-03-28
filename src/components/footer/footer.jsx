import React from 'react';
import styles from './footer.module.css';
import icon from '../../images/upload.svg';

const footer = () => {
    return (
        <div className={styles.footer}>
            <a href="#" className={styles.container}>
                <img src={icon} alt="Up Arrow"/>
                <h5>Back to Top</h5>
            </a>
        </div>
    );
};

export default footer;