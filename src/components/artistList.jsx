import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import GifItem from '../components/gifItem';
import icon from '../images/flash.svg';
import styles from '../css/artistList.module.css';
import 'react-multi-carousel/lib/styles.css';

class artistList extends Component {
    render() {
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
            <div className="artistList">
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
                    <h2>test</h2>
                </Carousel>
            </div>
        );
    }
}

export default artistList;