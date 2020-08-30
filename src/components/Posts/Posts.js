import React, {Component} from 'react'
import axios from 'axios'

class Posts extends Component{
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('/api/items').then(items => {
            this.setState({
                items: items.data
            })
        })
    }

    deleteItem = (id) => {
        axios.delete(`/api/items/${id}`).then((item) => {
            this.setState({item: item.data})
        })
    }

    changeHandler(){
        
    }

    render(){
        console.log(this.state.item)
        const newItem = this.state.posts.map((e, i) => {
            return <item deleteItem={this.deleteItem} key={i} data={e} />
        })
        return(
            <div>
                {newItem}
            </div>
        )
    }
}

export default Posts