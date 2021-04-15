import React from 'react';
import Navigation from '../../navigation/navigation';
import SearchBar from '../../searchBar/searchBar';
import Footer from '../../footer/footer';

import styles from './gifListPage.module.css';
import searchBar from '../../searchBar/searchBar';

const gifListPage = (props) => {
    return (
        <div className={styles.giflist}>
            <Navigation />
            <SearchBar />
            <h1 className={styles.title}>Entertainment GIFs</h1>
            <Footer />
        </div>
    );
};

export default gifListPage;