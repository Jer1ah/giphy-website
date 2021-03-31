import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import { combineReducers } from 'redux';

const trendingGifs = (state=[], action) => {
    switch(action.type) {
        case 'GET_TRENDING_LIST':
            return [...action.payload];
        default: 
            return state;
    }
};

const artistGifs = (state=[], action) => {
    switch(action.type) {
        case 'GET_ARTIST_LIST':
            return [...action.payload];
        default:
            return state;
    }
};

const reactionsGifs = (state=[], action) => {
    switch(action.type) {
        case 'GET_ENTERTAINMENT_LIST':
            return [...action.payload]
        default:
            return state;
    }
};

export default combineReducers({
    trendingGifs: trendingGifs,
    artistGifs: artistGifs,
    reactionsGifs: reactionsGifs
});