import React, {Component} from 'react'
import axios from 'axios'

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

    // componentDidMount() {
    //     const {itemName, image, price, description} = this.props.match.params
    //     this.setState({
    //         itemName, image, price, description
    //     })
    // }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      editItem = (itemName, image, price, description, id) => {
        axios.put(`/api/edit/${id}`, {itemName, image, price, description, id}).then(() => {
            this.props.history.push('/dashboard')
        })
      }


    render(){
        const {itemName, image, price, description} = this.state    
        return(
            <div className="container">
                <h1>Add Post</h1>
                <div className="input">
                    <input onChange={(e) => this.handleChange(e)} placeholder="item" value={itemName} name='itemName' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="image" value={image} name='image' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="description" value={description} name='description' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="price" value={price} name='price' />
                </div>

                <div className="buttons">
                    <button onClick={() => {this.addPost(itemName, image, price, description)}} >Add to inventory</button>
                    <button onClick={() => this.editItem(itemName, image, price, description, this.props.match.params.id)}>edit</button>
                </div>
            </div>
        )
    }
}

export default EditPost

