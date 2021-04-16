import React, { Component } from 'react';
import  { connect } from 'react-redux';
import GifList from '../../gifList/gifList';
import TagNavigation from '../../tagNavigation/tagNavigation';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import styles from './searchPage.module.css';

class searchPage extends Component {


    render() {
        const gifs = this.props.tagTitle === 'stickers' ? this.props.stickersList : this.props.gifList;

        return (
            <div className={styles.searchPage}>
                <Header />
                <TagNavigation />
                <GifList gifList={gifs}/>
                <Footer />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        gifList: state.searchedGifs,
        stickersList: state.stickersList,
        tagTitle: state.tagTitle
    };
};

export default connect(mapStateToProps)(searchPage)