import React, { Component } from 'react'
import axios from 'axios'

class Posts extends Component {
    constructor(){
        super()

        this.state = {
            itemName: '',
            image: '' ,
            price: 2,
            description: ''
        }
    }

    componentDidMount(){
        axios.get('/api/item/:id').then(res =>{
            this.setState({
                itemName: res.data.itemName,
                image: res.data.image,
                price: res.data.num,
                description: res.data.description
            })
        })
    }

    render(){
        return(
            <div>Posts page</div>
        )
    }
}

export default Posts