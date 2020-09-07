import React, {Component} from 'react'
import axios from 'axios'
import './Posts.css'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {addToCart} from '../../redux/reducer'
import {connect} from 'react-redux'


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

    // deleteItem = (id) => {
    //     console.log(id)
    //     axios.delete(`/api/item/${id}`).then((item) => {
    //         this.setState({items: item.data})
    //     })
    // }

    render(){
        console.log(this.state.items)
        const newItem = this.state.items.map((e, i) => {
            
            return (
                <div key={e.item_id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={e.image} />
                        <Card.Body>
                            <Card.Title>{e.itemName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">${e.price}</Card.Subtitle>
                            <Card.Text>{e.description}</Card.Text>
                            <hr></hr>
                            <div id="buttons">
                                <Button onClick={() => {this.deleteItem(e.item_id)}}>Edit</Button>
                                {/* <Button onClick={() => {this.deleteItem(e.item_id)}}>Delete</Button> */}
                                <Button onClick={() => {this.props.addToCart(e)}}>Add to cart</Button>
                            </div>
                        </Card.Body>
                        </Card>

                    {/* <div>
                        <img src={e.image} />
                        <h2>{e.itemName}</h2>
                        <h4>{e.price}</h4>
                        <p>{e.description}</p>
                        <button onClick={() => {this.deleteItem(e.item_id)}}>Delete</button>
                    </div> */}
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

export default connect(null, {addToCart})(Posts)