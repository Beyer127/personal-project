import React, {Component} from 'react'
import axios from 'axios'
import './Posts.css'
import {addToCart} from '../../redux/reducer'
import {connect} from 'react-redux'
import {editPost} from '../../redux/editReducer'


class Posts extends Component{
    constructor(props){
        super(props)

        this.state = {
            itemName: '',
            image: '',
            price: '',
            description: '',
            edit: false,
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

    // componentDidMount(){
    //     if(this.props.match.params.id){
    //         this.setState({edit: true})
    //     }
    // }

    getItems = () => {
        axios.get('/api/item').then(items => {
            this.setState({
                items: items.data
            })
        })
    }
    
    editItem = (itemName, image, price, description, id) => {
        axios.put(`/api/item/${id}`, {itemName, image, price, description, id}).then(() =>{
            this.props.history.push('/dashboard')
        })
    }

    deleteItem = (id) => {
        axios.delete(`/api/item/${id}`).then(() => {
            this.getItems()
        })
    }


    handleEdit = (post) => {
        this.props.editPost(post)
        this.props.history.push('/editPost')
    }




    render(){
        // const {itemName, image, price, description, id} = this.state
        console.log(this.state.items)
        const newItem = this.state.items.map((e, i) => {
            
            return (
                <div key={e.item_id}>
                    <img src={e.image}></img>
                    <h4>{e.item_name}</h4>
                    <p>{e.price}</p>
                    <p>{e.description}</p>
                    <hr></hr>
                    <div id="buttons">
                        <button className="button" onClick={() => this.handleEdit(e)}>Edit</button>
                        <button className="button" onClick={() => {this.props.addToCart(e)}}>Add to cart</button>
                        <button className="button" onClick={() => this.deleteItem(e.item_id)}>Delete</button>
                    </div>
                        
                </div>
            )
        })
        return(
            <div className="container">
                {newItem}   
            </div>
               
        )
    }
}



export default connect(null, {addToCart, editPost})(Posts)