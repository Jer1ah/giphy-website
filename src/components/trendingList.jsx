import { React, Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GifItem from '../components/gifItem';
import icon from '../images/trend.svg';
import styles from '../css/trendingList.module.css';

class trendingList extends Component {
    render() {
        const trendingGifList = this.props.trendingGifs.map((gif) => {
            return <GifItem gif={gif.images.downsized.url}/>
        });

        const responsive = {
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 500
                },
                items: 4,
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
                >
                    {trendingGifList}
                </Carousel>
            </div>
        );
    }
};

export default trendingList;