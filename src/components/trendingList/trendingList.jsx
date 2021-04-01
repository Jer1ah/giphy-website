import React from 'react';
import Carousel from 'react-multi-carousel';
import { connect } from 'react-redux';
import GifItem from '../gifItem/gifItem';
import icon from '../../images/trend.svg';
import 'react-multi-carousel/lib/styles.css';
import styles from './trendingList.module.css';

const trendingList = (props) => {
    const trendingGifList = props.trendingGifs.map((gif) => {
        return <GifItem gif={gif.images.downsized.url}/>
    });

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 500
            },
            items: 5,
            partialVisibilityGutter: 30,
            slidesToSlide: 3
        }
    };

    return (
        <div className={styles.trending}>
            <span className={styles.heading}>
                <img src={icon} alt="trending icon"/>
                <h3>Trending</h3>
            </span>
            <Carousel 
                responsive={responsive} 
                showDots={false}
                containerClass={styles.trendingList}
                itemClass={styles.trendingListItem}
                partialVisbile={true}
                infinite={true}
            >
                {trendingGifList}
            </Carousel>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        trendingGifs: state.trendingGifs
    };
};

export default connect(mapStateToProps)(trendingList);