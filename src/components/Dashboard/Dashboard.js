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