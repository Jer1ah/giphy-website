import React, { Component } from 'react';
import GifItem from '../gifItem/gifItem';
import styles from './gifList.module.css';

class gifList extends Component {
    render() {
        const gifList = this.props.gifList.map((gif) => {
            return <GifItem gif={gif.images.downsized.url}/>
        });

        return (
            <ul className={styles.gifList}> 
                {gifList}
            </ul>
        );
    }
};

export default gifList;