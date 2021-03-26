import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import GifItem from '../components/gifItem';
import icon from '../images/flash.svg';
import styles from '../css/artistList.module.css';
import 'react-multi-carousel/lib/styles.css';

class artistList extends Component {
    render() {
        const artistList = this.props.artistList.map((gif) => {
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