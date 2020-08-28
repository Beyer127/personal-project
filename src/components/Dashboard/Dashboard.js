import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('/api/item').then(res => {
            this.setState({posts: res.data})
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <div>Dashboard
             
            </div>
        )
    }
}

export default Dashboard