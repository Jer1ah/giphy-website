import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getTrendingGifs,
    getArtistGifs,
    getReactionsGifs
} from '../../../actions';

import Header from '../../header/header';
import TrendingList from '../../trendingList/trendingList';
import ArtistList from '../../artistList/artistList';
import ReactionsList from '../../reactionsList/reactionsList';
import Footer from '../../footer/footer';

import styles from './homePage.module.css';

class homePage extends Component {
    componentDidMount() {
        this.props.getTrendingGifs();
        this.props.getReactionsGifs();
        this.props.getArtistGifs();
    }

    render() {
        return (
            <div className={styles.homePage}>
                <Header />
                <TrendingList />
                <ArtistList />
                <ReactionsList />
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateToProps, {
    getTrendingGifs,
    getReactionsGifs,
    getArtistGifs
})(homePage);