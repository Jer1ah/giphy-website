import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../navigation/navigation';
import SearchBar from '../../searchBar/searchBar';
import Footer from '../../footer/footer';
import GifItem from '../../gifItem/gifItem';

import { getTrendingStickers } from '../../../actions';

import styles from './stickersPage.module.css';

class stickersPage extends Component {
    componentDidMount() {
        this.props.getTrendingStickers();
    }

    render() {
        const stickersList = this.props.trendingStickers.map((gif) => {
            return <GifItem gif={gif.images.downsized.url} key={gif.id}/>
        });

        return (
            <div className={styles.stickersPage}>
                <Navigation />
                <SearchBar />
                <h1 className={styles.title}>Stickers</h1>
                <ul className={styles.list}>
                    {stickersList}
                </ul>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        trendingStickers: state.trendingStickers
    };
};

export default connect(mapStateToProps, {
    getTrendingStickers
})(stickersPage);