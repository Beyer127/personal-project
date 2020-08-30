import React, { Component } from 'react'
import axios from 'axios'
import './Dashboard.css'

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
            <div>
                <div className='main' src='https://www.ppavigil.org/wp-content/uploads/2018/05/BUY-2-300x157.png' ></div>
            </div>
        )
    }
}

export default Dashboard