import React, {Component} from 'react'

class Auth extends Component{
    constructor(){
        super()

        this.state = {
            first_name = '',
            last_name = '',
            email = '',
            password = ''
        }
    }

    render(){
        return(
            <div>This is the Auth page</div>
        )
    }
}

export default Auth
