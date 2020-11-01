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
                <div>
                    <section>
                        <img className="second-img" src="https://images.unsplash.com/photo-1558888426-04826cfe6d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                          {/* <button className="dash-buttons"> <a className="dash-buttons" href="http://localhost:3000/#/addpost">Post Item</a></button>
                          <button className="dash-buttons"> <a className="dash-buttons" href="http://localhost:3000/#/item">Shop</a></button> */}
                        <img className="first-img" src="https://images.unsplash.com/photo-1572797988761-19ef379d5091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                    </section>
                </div>
        )
    }
}

export default Dashboard