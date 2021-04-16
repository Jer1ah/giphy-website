import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGifList, getStickersList, updateTagTitle } from '../../actions';
import styles from './tagNavigation.module.css';

class tagNavigation extends Component {
    constructor(props) {
        super(props);

        this.stickersButton = React.createRef();
        this.gifsButton = React.createRef();
    }

    onFirstButtonClick = (event) => {
        event.target.classList.add(`${styles.active}`);
        event.target.nextElementSibling.classList.remove(`${styles.active}`);
        this.props.getGifList(this.props.searchTerm);
        this.props.updateTagTitle('gifs');
    };

    onSecondButtonClick = (event) => {
        event.target.classList.add(`${styles.active}`);
        event.target.previousElementSibling.classList.remove(`${styles.active}`);
        this.props.getStickersList(this.props.searchTerm);
        this.props.updateTagTitle('stickers');
    }

    render() {
        return (
            <div className={styles.tagNavigation}>
                <h2 className={styles.searchTitle}>{this.props.searchTerm}</h2>
                <button className={`${styles.gifsButton} ${styles.active}`}
                        onClick={this.onFirstButtonClick}
                        ref={this.gifsButton}
                >GIFs</button>
                <button className={styles.stickersButton}
                        onClick={this.onSecondButtonClick}
                        ref={this.stickersButton}
                >Stickers</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateToProps, {
    getStickersList,
    getGifList,
    updateTagTitle
})(tagNavigation);