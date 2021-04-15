import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './tagNavigation.module.css';

class tagNavigation extends Component {
    onFirstButtonClick = (event) => {
        event.target.classList.add(`${styles.active}`);
        event.target.nextElementSibling.classList.remove(`${styles.active}`);
    };

    onSecondButtonClick = (event) => {
        event.target.classList.add(`${styles.active}`);
        event.target.previousElementSibling.classList.remove(`${styles.active}`);
    }

    render() {
        return (
            <div className={styles.tagNavigation}>
                <h2 className={styles.searchTitle}>{this.props.searchTerm}</h2>
                <button className={`${styles.gifsButton} ${styles.active}`}
                        onClick={this.onFirstButtonClick}
                >GIFs</button>
                <button className={styles.stickersButton}
                        onClick={this.onSecondButtonClick}
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

export default connect(mapStateToProps)(tagNavigation);