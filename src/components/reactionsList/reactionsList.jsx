import React from 'react';
import { connect } from 'react-redux';
import icon from '../../images/video-player.svg';
import styles from './reactionsList.module.css';

const reactionsList = (props) => {
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
            {props.reactionsGifs[0] ? gifList(props.reactionsGifs) : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        reactionsGifs: state.reactionsGifs
    };
};

export default connect(mapStateToProps)(reactionsList)