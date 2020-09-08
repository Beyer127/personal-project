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
                <>
                    <div className="background">
                        <img className="second-img" src="https://images.unsplash.com/photo-1558888426-04826cfe6d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                        <img className="first-img" src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"/>
                        <div className="buttons">
                            <button src="http://localhost:3000/#/addpost">Post Item</button>
                            <button src="http://localhost:3000/#/item">Shop</button>
                         </div>
                     </div>
                </>
        )
    }
}

export default Dashboard