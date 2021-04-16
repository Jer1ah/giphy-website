import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    getSearchedGifs,
    updateSearchTerm,
    getStickersList
} from '../../actions';

import styles from './searchBar.module.css';

import searchIcon from '../../images/search.svg';

class searchBar extends Component {
    constructor(props) {
        super(props);
        this.searchBar = React.createRef();
    }

    onSearch = () => {
        this.props.updateSearchTerm(this.searchBar.current.value);
        this.props.getSearchedGifs(this.searchBar.current.value);
        this.props.getStickersList(this.searchBar.current.value);
        this.searchBar.current.value = '';
    }

    render() {
        return (
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search all GIF's and Stickers" ref={this.searchBar}/>
                <Link 
                    to="/search"
                    onClick={this.onSearch}
                >
                    <img src={searchIcon} alt="Search icon"/>
                </Link>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm,
        gifList: state.searchedGifs,
    };
}

export default connect(mapStateToProps, {
    getSearchedGifs,
    updateSearchTerm,
    getStickersList
})(searchBar);