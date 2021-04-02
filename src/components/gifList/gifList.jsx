import React, { Component } from 'react';
import GifItem from '../gifItem/gifItem';
import styles from './gifList.module.css';

class gifList extends Component {
    render() {
        const gifList = this.props.gifList.map((gif) => {
            return <GifItem gif={gif.images.downsized.url} key={gif.id}/>
        });

        return (
            <ul className={styles.gifList} onClick={() => { this.forceUpdate() }}> 
                {gifList}
            </ul>
        );
    }
};

export default gifList;