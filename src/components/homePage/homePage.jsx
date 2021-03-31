import React from 'react';

import Header from '../header/header';
import TrendingList from '../trendingList/trendingList';
import ArtistList from '../artistList/artistList';
import ReactionsList from '../reactionsList/reactionsList';
import Footer from '../footer/footer';

const home = () => {
    return (
        <div className="home">
            <Header />
            <TrendingList />
            <ArtistList />
            <ReactionsList />
            <Footer />
        </div>
    );
};

export default home;