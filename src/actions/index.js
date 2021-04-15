import axios from 'axios';

export const getTrendingGifs = () => {
    return async (dispatch) => {
        const gifList = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=21');
        dispatch({ type: 'GET_TRENDING_LIST', payload: gifList.data.data });
    }
};

export const getArtistGifs = () => {
    return async (dispatch) => {
        const gifList = await axios.get('https://api.giphy.com/v1/gifs/search?q=artist&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38');
        dispatch({ type: 'GET_ARTIST_LIST', payload: gifList.data.data });
    }
};

export const getReactionsGifs = () => {
    return async (dispatch) => {
        const gifList = await axios.get('https://api.giphy.com/v1/gifs/search?q=reactions&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38');
        dispatch({ type: 'GET_REACTIONS_LIST', payload: gifList.data.data });
    }
};

export const getSearchedGifs = (searchTerm) => {
    return async (dispatch) => {
        const gifList = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38`);
        dispatch({ type: 'GET_SEARCHED_GIFS', payload: gifList.data.data });
    }
};

export const getGifList = (searchTerm) => {
    return async (dispatch) => {
        const gifList = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38`);
        dispatch({ type: 'GET_GIF_LIST', payload: gifList.data.data });
    }
};

export const updateSearchTerm = (term) => {
    return {
        type: 'GET_SEARCH_TERM',
        payload: term
    }
};

export const getTitle = (title) => {
    return {
        type: 'GET_TITLE',
        payload: title
    }
};