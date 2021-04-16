import React from 'react';
import Carousel from 'react-multi-carousel';
import { connect } from 'react-redux';
import GifItem from '../gifItem/gifItem';
import icon from '../../images/flash.svg';
import styles from './artistList.module.css';
import 'react-multi-carousel/lib/styles.css';

const artistList = (props) => {
    const artistGifList = props.artistGifs.map((gif) => {
        return <GifItem gif={gif.images.downsized.url} key={gif.id}/>
    });

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 500
            },
            items: 3,
            slidesToSlide: 1
        },

        tablet: {
            breakpoint: {
                max: 825,
                min: 0
            },
            items: 2
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
                infinite={true}
            >
                {artistGifList}
            </Carousel>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        artistGifs: state.artistGifs
    };
};

export default connect(mapStateToProps)(artistList);