import {React, Component} from 'react';

import Navigation from '../navigation/navigation';
import SearchBar from '../searchBar/searchBar';

import styles from './header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header} id="top">
                <Navigation />
                <SearchBar />
            </div>
        );
    }
}

export default Header;