import React, {Component} from 'react'
import axios from 'axios'
import './Posts.css'
import './AddPost/Card.css'

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
            return (
                <div className='card text-center'>
                    <div className='overflow'>
                        <img src={e.image} className='card-img-top'/>
                        <h2>{e.itemName}</h2>
                        <h4>{e.price}</h4>
                        <p>{e.description}</p>
                        <button onClick={() => {this.deleteItem(this.props.delete_item)}}>Delete</button>
                    </div>
                </div>
            )
        })
        return(
            <div>
                {newItem}
            </div>
        )
    }
}

export default Posts