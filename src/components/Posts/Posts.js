import React, {Component} from 'react'
import axios from 'axios'
import './Posts.css'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
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
    
    editItem = (itemName, image, price, description, id) => {
        axios.put(`/api/item/${id}`, {itemName, image, price, description, id}).then(() =>{
            this.props.history.push('/dashboard')
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
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={e.image} />
                        <Card.Body>
                            <Card.Title>{e.item_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">${e.price}</Card.Subtitle>
                            <Card.Text>{e.description}</Card.Text>
                            <hr></hr>
                            <div id="buttons">
                                <Button onClick={() => this.handleEdit(e)}>Edit</Button>
                                <Button onClick={() => {this.props.addToCart(e)}}>Add to cart</Button>
                            </div>
                        </Card.Body>
                        </Card>
                </div>
            )
        })
        return(
            <div className="container col-lg-3">
                <div className="row">
                    {newItem}   
                </div>
            </div>
        )
    }
}



export default connect(null, {addToCart, editPost})(Posts)