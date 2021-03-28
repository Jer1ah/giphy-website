import React from 'react';
import Carousel from 'react-multi-carousel';
import GifItem from '../gifItem/gifItem';
import icon from '../images/flash.svg';
import styles from './reactionsList.module.css';
import 'react-multi-carousel/lib/styles.css';

const reactionsList = (props) => {
    const reationsList = props.reactionsList.map((gif) => {
        return <GifItem gif={gif.images.downsized.url}/>
    })

    return (
        <div className="reactionsList">
            {reactionsList}
        </div>
    );
};

export default reactionsList