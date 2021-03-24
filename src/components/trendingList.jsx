import React from 'react';
import GifItem from '../components/gifItem';
import icon from '../images/trend.svg';
import styles from '../css/trendingList.module.css';

const trendingList = (props) => {
    const trendingGifList = props.trendingGifs.map((gif) => {
        return <GifItem gif={gif.images.downsized.url}/>
    });

    return (
        <div className={styles.trending}>
            <span className={styles.heading}>
                <img src={icon} alt="trending icon"/>
                <h3>Trending</h3>
            </span>
            <ul className={styles.trendingList}>
                {trendingGifList}
            </ul>
        </div>
    );
};

export default trendingList;