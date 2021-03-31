import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import { connect } from 'react-redux';
import { getArtistGifs } from '../../actions';
import GifItem from '../gifItem/gifItem';
import icon from '../../images/flash.svg';
import styles from './artistList.module.css';
import 'react-multi-carousel/lib/styles.css';

class artistList extends Component {
    componentDidMount() {
        this.props.getArtistGifs();
    }

    render() {
        const artistGifList = this.props.artistGifs.map((gif) => {
            return <GifItem gif={gif.images.downsized.url}/>
        });

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
                    {artistGifList}
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        artistGifs: state.artistGifs
    };
};

export default connect(mapStateToProps, {
    getArtistGifs
})(artistList);