import React, {Component} from 'react'
import axios from 'axios'

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
            this.setState = ({itemName: res.data, image: res.data, price: res.data, description: res.description}) 
            this.props.history.push('/dashboard')   
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
            this.props.history.push('/')
        })
      }
    render(){
        const {shelfie_image, description, price, edit} = this.state
        console.log(this.props)
    
        return(
            <div className="form">
                <div className="input">
                    <input onChange={(e) => this.handleChange(e)} placeholder="image" value={shelfie_image} name='shelfie_image' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="description" value={description} name='description' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="price" value={price} name='price' />
                </div>

                <div className="buttons">
                    <button onClick={() => {this.addShelfie(shelfie_image, description, price)}}> Cancel</button>
                    {edit?(
                        <button onClick={() => this.editShelfie(shelfie_image, description, price, this.props.match.params.id)}>edit</button>
                    ):<button onClick={() => {this.addShelfie(shelfie_image, description, price )}} >Add to inventory</button>}
                </div>
            </div>
        )
    }
}

export default AddPost