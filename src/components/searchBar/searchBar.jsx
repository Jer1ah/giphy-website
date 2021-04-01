import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearchedGifs } from '../../actions';

import styles from './searchBar.module.css';

import searchIcon from '../../images/search.svg';

class searchBar extends Component {
    constructor(props) {
        super(props);
        this.searchBar = React.createRef();
    }

    render() {
        return (
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search all GIF's and Stickers" ref={this.searchBar}/>
                <Link 
                    to="/search"
                    onClick={() => this.props.getSearchedGifs(this.searchBar.current.value)}
                ><img src={searchIcon} alt="Search icon"/></Link>
            </div>
        );
    }
};

export default connect(null, {
    getSearchedGifs
})(searchBar);