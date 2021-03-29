import React, { Component } from 'react';
import GifItem from '../gifItem/gifItem';
import axios from 'axios';
import icon from '../../images/video-player.svg';
import styles from './reactionsList.module.css';

class reactionsList extends Component {
    state = {
        list: []
    }

    async componentDidMount() {
        const reactionsList = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&q=reactions&limit=5`);

        this.setState({ list: reactionsList.data.data });
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
                {this.state.list[0] ? gifList(this.state.list) : null}
            </div>
        );
    }
};

export default reactionsList