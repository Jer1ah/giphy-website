import React, { Component } from 'react';
import Navigation from '../../navigation/navigation';
import SearchBar from '../../searchBar/searchBar';
import Footer from '../../footer/footer';
import GifItem from '../../gifItem/gifItem';
import { connect } from 'react-redux';

import { getGifList, getTitle } from '../../../actions';

import styles from './gifListPage.module.css';

class gifListPage extends Component {
    render() {
        const gifList = this.props.gifList.map((gif) => {
            return <GifItem gif={gif.images.downsized.url} key={gif.id}/>
        });

        return (
            <div className={styles.giflist}>
                <Navigation/>
                <SearchBar />
                <h1 className={styles.title}>{this.props.gifTitle} GIFs</h1>
                <ul className={styles.list}>
                    {gifList}
                </ul>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        gifList: state.gifList,
        gifTitle: state.gifTitle
    };
};

export default connect(mapStateToProps, {
    getGifList,
    getTitle
})(gifListPage);