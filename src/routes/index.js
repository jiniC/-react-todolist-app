import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import NotFound from './NotFound';

// class면 render 안에서 return 
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes