import React from 'react';
import  { connect } from 'react-redux';
import GifList from '../../gifList/gifList';
import TagNavigation from '../../tagNavigation/tagNavigation';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import styles from './searchPage.module.css';

const searchPage = (props) => {
    return (
        <div className={styles.searchPage}>
            <Header />
            <TagNavigation />
            <GifList gifList={props.gifList}/>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        gifList: state.searchedGifs
    };
};

export default connect(mapStateToProps)(searchPage)