import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Auth from './components/Auth/Auth'
import Posts from './components/Posts/Posts'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route  path='/dashboard' component={Dashboard} />
        <Route path='/posts' component={Posts} />
    </Switch>
)