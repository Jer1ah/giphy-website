import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import LoginPage from '../pages/loginPage/loginPage'
import SearchPage from '../pages/searchPage/searchPage';
import styles from './app.module.css';

const App = () => {
    return (
        <Router>
            <Switch className={styles.app}>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/search" component={SearchPage}/>
            </Switch>
        </Router>
    );
};

export default App;