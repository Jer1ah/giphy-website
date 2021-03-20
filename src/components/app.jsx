import React from 'react';

import Header from './header';

import styles from '../css/app.module.css';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
        </div>
    );
};

export default App;