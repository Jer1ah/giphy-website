import { React, Component } from 'react';

import axios from 'axios';

import Header from './header';
import TrendingList from './trendingList';
import ArtistList from './artistList';

import styles from '../css/app.module.css';

class App extends Component {
    state = {
        trendingGifs: [],
        artistList: []
    }

    async componentDidMount() {
        const trendingGifs = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=20');

        const artistList = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&q=artist&limit=20`);

        this.setState({
            trendingGifs: trendingGifs.data.data,
            artistList: artistList.data.data
        });
    }

    render() {
        return (
            <div className={styles.app}>
                <Header />
                <TrendingList trendingGifs={this.state.trendingGifs}/>
                <ArtistList artistList={this.state.artistList}/>
            </div>
        );
    }
};

export default App;