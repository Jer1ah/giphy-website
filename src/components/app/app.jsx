import { React, Component } from 'react';

import axios from 'axios';

import Header from '../header/header';
import TrendingList from '../trendingList/trendingList';
import ArtistList from '../artistList/artistList';
import ReactionsList from '../reactionsList/reactionsList';

import styles from './app.module.css';

class App extends Component {
    state = {
        trendingGifs: [],
        artistList: [],
        reactionsList: []
    }

    async componentDidMount() {
        const trendingGifs = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=20');

        const artistList = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&q=artist&limit=20`);

        const reactionsList = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&q=reactions&limit=20`);

        this.setState({
            trendingGifs: trendingGifs.data.data,
            artistList: artistList.data.data,
            reactionsList: reactionsList.data.data
        });
    }

    render() {
        return (
            <div className={styles.app}>
                <Header />
                <TrendingList trendingGifs={this.state.trendingGifs}/>
                <ArtistList artistList={this.state.artistList}/>
                <ReactionsList reactionsList={this.state.reactionsList}/>
            </div>
        );
    }
};

export default App;