import React, {Component} from 'react'
import axios from 'axios'
import './Posts.css'

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
        console.log(id)
        axios.delete(`/api/item/${id}`).then((item) => {
            this.setState({items: item.data})
        })
    }

    render(){
        console.log(this.state.items)
        const newItem = this.state.items.map((e, i) => {
            
            return (
                <div key={e.item_id} className='card text-center'>

                    <div>
                        <img src={e.image} />
                        <h2>{e.itemName}</h2>
                        <h4>{e.price}</h4>
                        <p>{e.description}</p>
                        <button onClick={() => {this.deleteItem(e.item_id)}}>Delete</button>
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