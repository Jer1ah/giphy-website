import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import LoginPage from '../pages/loginPage/loginPage'
import SearchPage from '../pages/searchPage/searchPage';
import GifListPage from '../pages/gifListPage/gifListPage';
import StickersPage from '../pages/stickersPage/stickersPage';

import styles from './app.module.css';

const App = () => {
    return (
        <Router>
            <Switch className={styles.app}>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route exact path="/giflist" component={GifListPage}/>
                <Route exact path="/stickers" component={StickersPage} />
            </Switch>
        </Router>
    );
};

export default App;