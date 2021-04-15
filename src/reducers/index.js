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
        case 'GET_REACTIONS_LIST':
            return [...action.payload]
        default:
            return state;
    }
};

const searchedGifs = (state=[], action) => {
    switch(action.type) {
        case 'GET_SEARCHED_GIFS':
            return [...action.payload];
        default:
            return state;
    }
};

const gifList = (state=[], action) => {
    switch(action.type) {
        case 'GET_GIF_LIST':
            return [...action.payload];
        default:
            return state;
    }
};

const searchTerm = (state='', action) => {
    switch(action.type) {
        case 'GET_SEARCH_TERM':
            return action.payload;
        default:
            return state;
    }
};

const gifTitle = (state='', action) => {
    switch(action.type) {
        case 'GET_TITLE':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    trendingGifs: trendingGifs,
    artistGifs: artistGifs,
    reactionsGifs: reactionsGifs,
    searchedGifs: searchedGifs,
    gifList: gifList,
    searchTerm: searchTerm,
    gifTitle: gifTitle
});