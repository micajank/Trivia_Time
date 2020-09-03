import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Gameboard from './pages/Gameboard';


export default function Content(props) {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/gameboard' component={Gameboard} />
        </Switch>
    )

}