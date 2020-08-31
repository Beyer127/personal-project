import React, {Component} from 'react'
import axios from 'axios'
import './AddPost.css'

class AddPost extends Component {
    constructor(){
        super()

        this.state = {
            itemName: '',
            image: '',
            price: 0,
            description: '',
            edit: false
        }
    }

    addPost = (itemName, image, price, description) => {
        axios.post('/api/item', {itemName, image, price, description}).then((res) => {
            this.setState = ({itemName: res.data, image: res.data, price: res.data, description: res.data}) 
            this.props.history.push('/posts')   
        }).catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      componentDidMount(){
          if(this.props.match.params.id){
              this.setState({edit: true})
          }

      }

      editItem = (itemName, image, price, description, id) => {
        axios.put(`/api/shelfie/${id}`, {itemName, image, price, description, id}).then(() => {
            this.props.history.push('/dashboard')
        })
      }
    render(){
        const {itemName, image, price, description, id} = this.state    
        return(
            <div className="container">
                <div className="input">
                    <input onChange={(e) => this.handleChange(e)} placeholder="item" value={itemName} name='itemName' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="image" value={image} name='image' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="description" value={description} name='description' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="price" value={price} name='price' />
                </div>

                <div className="buttons">
                    <button onClick={() => {this.addPost(itemName, image, price, description)}}> Cancel</button>
                    {this.state.edit ?(
                        <button onClick={() => this.editPost(itemName, image, price, description, this.props.match.params.id)}>edit</button>
                    ):<button onClick={() => {this.addPost(itemName, image, price, description)}} >Add to inventory</button>}
                </div>
            </div>
        )
    }
}

export default AddPost