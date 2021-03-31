import React, { Component } from 'react';
import GifItem from '../gifItem/gifItem';
import { connect } from 'react-redux';
import { getReactionsGifs } from '../../actions';
import axios from 'axios';
import icon from '../../images/video-player.svg';
import styles from './reactionsList.module.css';

class reactionsList extends Component {
    componentDidMount() {
        this.props.getReactionsGifs();
    }

    render() {
        const gifList = (gifList) => {
            return <div className={styles.container}>
                <div className={styles.mainGif}>
                    <img src={gifList[0].images.downsized.url} alt="Gif"/>
                </div>
                <ul className={styles.gifList}>
                    <li className={styles.gifListItem}>
                        <img src={gifList[1].images.downsized.url} alt="Gif"/>
                    </li>
                    <li className={styles.gifListItem}>
                        <img src={gifList[2].images.downsized.url} alt="Gif"/>
                    </li>
                    <li className={styles.gifListItem}>
                        <img src={gifList[3].images.downsized.url} alt="Gif"/>
                    </li>
                    <li className={styles.gifListItem}>
                        <img src={gifList[4].images.downsized.url} alt="Gif"/>
                    </li>
                </ul>
            </div>
        };

        return (
            <div className={styles.reactions}>
                <span className={styles.heading}>
                    <img src={icon} alt="trending icon"/>
                    <h3>Reactions</h3>
                </span>
                {this.props.reactionsGifs[0] ? gifList(this.props.reactionsGifs) : null}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        reactionsGifs: state.reactionsGifs
    };
};

export default connect(mapStateToProps, {
    getReactionsGifs
})(reactionsList)