import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {editPost} from './../redux/editReducer'
import './EditPost.css'

class EditPost extends Component {
    constructor(){
        super()
            // const {item_name, image, price, description} = this.props.match.params

        this.state = {
            itemName: '',
            image: '',
            price: '',
            description: '',
            edit: false
        }
    }

    componentDidMount() {
        const {item_name, image, price, description} = this.props.editReducer.edit
        this.setState({
            itemName: item_name, image, price, description
        })
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      editItem = (itemName, image, price, description, id) => {
        axios.put(`/api/item/${id}`, {itemName, image, price, description, id}).then(() => {
            this.props.history.push('/posts')
        })
      }


    render(){
        const {itemName, image, price, description} = this.state  
        console.log(this.props.editReducer)  
        return(

            <div>
            <div className="container">
                <h1>Edit Post</h1>
                <div id="input">
                    <input onChange={(e) => this.handleChange(e)} placeholder="item" value={itemName} name='itemName' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="image" value={image} name='image' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="description" value={description} name='description' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="price" value={price} name='price' />
                </div>

                <div id="button">
                    <button onClick={() => this.props.history.push('/posts')} >cancel</button>
                    <button onClick={() => this.editItem(itemName, image, price, description, this.props.editReducer.edit.item_id)}>edit</button>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {editPost}) (EditPost)

