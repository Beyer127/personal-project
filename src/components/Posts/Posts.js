import React, {Component} from 'react'
import axios from 'axios'
import './Posts.scss'
import {addToCart} from '../../redux/reducer'
import {connect} from 'react-redux'
import {editPost} from '../../redux/editReducer'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'


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
                              <Card style={{ width: '18rem', height: '30rem'  }}>
                        <Card.Img variant="top" src={e.image} />
                        <Card.Body>
                            <Card.Title>{e.item_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">${e.price}</Card.Subtitle>
                            <Card.Text>{e.description}</Card.Text>
                            <hr></hr>
                            <div id="buttons">
                                <Button className="button" onClick={() => this.handleEdit(e)}>Edit</Button>
                                <Button className="button" onClick={() => {this.props.addToCart(e)}}>Add to cart</Button>
                                <Button className="button" onClick={() => this.deleteItem(e.item_id)}>Delete</Button>
                            </div>
                        </Card.Body>
                        </Card>
                        
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