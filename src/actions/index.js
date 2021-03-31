import axios from 'axios';

export const getTrendingGifs = () => {
    return async (dispatch) => {
        const gifList = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=20');
        dispatch({ type: 'GET_TRENDING_LIST', payload: gifList.data.data });
    }
};

export const getArtistGifs = () => {
    return async (dispatch) => {
        const gifList = await axios.get('http://api.giphy.com/v1/gifs/artist?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=20');
        dispatch({ type: 'GET_ARTIST_LIST', payload: gifList.data.data });
    }
};

export const getReactionsGifs = () => {
    return async (dispatch) => {
        const gifList = await axios.get('http://api.giphy.com/v1/gifs/entertainment?api_key=ms344CewNH5NEbybHwQifMZImoQfEQ38&limit=20');
        dispatch({ type: 'GET_ENTERTAINMENT_LIST', payload: gifList.data.data });
    }
};