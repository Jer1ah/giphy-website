import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import GifItem from '../gifItem/gifItem';
import axios from 'axios';
import icon from '../../images/flash.svg';
import styles from './artistList.module.css';
import 'react-multi-carousel/lib/styles.css';

class artistList extends Component {
    state = {
        list: []
    }

    async componentDidMount() {
        const artistList = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&q=artist&limit=20`);

        this.setState({ list: artistList.data.data });
    }

    render() {
        const artistList = this.state.list.map((gif) => {
            return <GifItem gif={gif.images.downsized.url}/>
        })

        const responsive = {
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 500
                },
                items: 3,
                partialVisibilityGutter: 30,
                slidesToSlide: 1
            }
        };

        return (
            <div className={styles.artist}>
                <span className={styles.heading}>
                    <img src={icon} alt="trending icon"/>
                    <h3>Artist</h3>
                </span>
                <Carousel 
                    responsive={responsive} 
                    showDots={false}
                    containerClass={styles.artistList}
                    itemClass={styles.artistListItem}
                    partialVisbile={true}
                    infinite={true}
                >
                    {artistList}
                </Carousel>
            </div>
        );
    }
}

export default artistList;