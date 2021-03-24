import { React, Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import GifItem from '../components/gifItem';
import icon from '../images/trend.svg';
import styles from '../css/trendingList.module.css';

class trendingList extends Component {
    render() {
        const trendingGifList = this.props.trendingGifs.map((gif) => {
            return <GifItem gif={gif.images.downsized.url}/>
        });

        return (
            <div className={styles.trending}>
                <span className={styles.heading}>
                    <img src={icon} alt="trending icon"/>
                    <h3>Trending</h3>
                </span>
                <Carousel>
                    {trendingGifList}
                </Carousel>
            </div>
        );
    }
};

export default trendingList;