import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {deleteFromCart} from '../../redux/reducer'


class Cart extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.cart.map(e => {
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
                                <Button onClick={() => {this.props.deleteFromCart(e.item_id)}}>Delete</Button>
                            </div>
                        </Card.Body>
                        </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, {deleteFromCart})(Cart)