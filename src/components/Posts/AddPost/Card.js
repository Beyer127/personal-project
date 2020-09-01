import React, { Component } from 'react'
import Posts from '../Posts'

class Card extends Component {

  render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div class='row'>
                    <div className='col-xl-3 col-md-4 col-sm-6'>
                        <Posts/>
                    </div>
                    <div className='col-xl-3 col-md-4 col-sm-6'>
                        <Posts/>
                    </div>
                    <div className='col-xl-3 col-md-4 col-sm-6'>
                        <Posts/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Card