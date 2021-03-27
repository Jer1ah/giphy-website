import React from 'react';
import axios from 'axios';
import GifItem from './gifItem';

const reactionsList = (props) => {
    const artistList = props.artistList.map((gif) => {
        return <GifItem gif={gif.images.downsized.url}/>
    })

    return (
        <div className="reactionsList">
            {artistList}
        </div>
    );
};

export default reactionsList