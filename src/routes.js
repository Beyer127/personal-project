import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Auth from './components/Auth/Auth'
import AddPost from './components/Posts/AddPost/AddPost'
import Cart from './components/Cart/Cart'
import Posts from './components/Posts/Posts'
import EditPost from './components/EditPost'

export default (
    <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/addPost' component={AddPost} />
            <Route path='/posts' component={Posts} />
            <Route path='/cart' component={Cart} />
            <Route path='/editPost' component={EditPost} />
            <Route exact path='/' component={Auth} />
    </Switch>
)