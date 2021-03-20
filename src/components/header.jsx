import {React, Component} from 'react';

import Navigation from './navigation';
import SearchBar from './searchBar';

import styles from '../css/header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <Navigation />
                <SearchBar />
            </div>
        );
    }
}

export default Header;