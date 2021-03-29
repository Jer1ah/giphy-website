import { React, Component } from 'react';
import Carousel from 'react-multi-carousel';
import GifItem from '../gifItem/gifItem';
import icon from '../../images/trend.svg';
import axios from 'axios';
import 'react-multi-carousel/lib/styles.css';
import styles from './trendingList.module.css';

class trendingList extends Component {
    state={
        list: []
    }

    async componentDidMount() {
        const trendingGifs = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=20');

        this.setState({ list: trendingGifs.data.data });
    }

    render() {
        const trendingGifList = this.state.list.map((gif) => {
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
    }
};

export default trendingList;