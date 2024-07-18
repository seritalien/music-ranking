import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import { Container } from '@material-ui/core';

function App() {
    return (
        <Container>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/artist/:artist" component={ArtistPage} />
            </Switch>
        </Container>
    );
}

export default App;
