import React, {Component} from 'react'
import axios from 'axios'
import AddPost from './AddPost/AddPost'

class Posts extends Component{
    constructor(props){
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount(){
        axios.get('/api/item').then(items => {
            this.setState({
                items: items.data
            })
        })
    }

    deleteItem = (id) => {
        axios.delete(`/api/item/${id}`).then((item) => {
            this.setState({item: item.data})
        })
    }

    render(){
        const newItem = this.state.items.map((e, i) => {
            return <div key={i}>
                <h1>{e.item_name}</h1>
                <img src={e.image}/>
                <h2>{e.price}</h2>
                <p>{e.description}</p>
                
            </div>
        })
        return(
            <div>
                {newItem}
            </div>
        )
    }
}

export default Posts