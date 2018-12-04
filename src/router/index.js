import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Hello from '../pages/Hello/Hello';

const RootRouter = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/hello' component={Hello}/>
            </Switch>
        </div>
    </Router>
)

export default RootRouter;