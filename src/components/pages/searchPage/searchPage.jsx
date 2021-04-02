import React, { Component } from 'react';
import  { connect } from 'react-redux';
import GifList from '../../gifList/gifList';
import TagNavigation from '../../tagNavigation/tagNavigation';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import styles from './searchPage.module.css';

class searchPage extends Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.gifList !== this.props.gifList) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className={styles.searchPage}>
                <Header />
                <TagNavigation />
                <GifList gifList={this.props.gifList}/>
                <Footer />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        gifList: state.searchedGifs
    };
};

export default connect(mapStateToProps)(searchPage)