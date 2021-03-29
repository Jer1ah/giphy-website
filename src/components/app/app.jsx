import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import HomePage from '../homePage/homePage';
import loginPage from '../loginPage/loginPage';
import styles from './app.module.css';

const App = () => {
    return (
        <Router>
            <Switch className={styles.app}>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={loginPage}/>
            </Switch>
        </Router>
    );
};

export default App;