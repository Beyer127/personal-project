import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
)