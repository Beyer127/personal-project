import React from 'react';
import './App.css';
import routes from './routes'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      editPost: {},
      dropDown: false
    }
  }

  toggleDropDown = () => {
    this.setState({
      dropDown: !this.state.dropDown
    })
  }

  render(){
    return (
      <div className="app">
        <div className="main-header">
    
            <span className="logo">OFFER UP</span>
        <nav className="desktop-menu">
            <span><i className="fas fa-user"></i> <a className='link' href="http://localhost:3000/#/"> LOGIN</a></span>
            <span><i className="fas fa-user-plus"></i> <a className='link' href="http://localhost:3000/#/"> SIGN UP</a></span>
            <span><i className="fas fa-camera"></i> <a className='link' href="http://localhost:3000/#/addpost"> POST</a></span>
            <span><i className="fas fa-money-check"></i> <a className='link' href="http://localhost:3000/#/posts"> SHOP</a></span>
            <span><i class="fas fa-shopping-cart"></i> <a className='link' href="http://localhost:3000/#/cart"> CART</a></span>
        </nav>
        <div className="dropdown" onClick={this.toggleDropDown}><i class="fas fa-bars burger"></i></div>
        { this.state.dropDown ? (
            <nav className="mobile-menu">
              <a className='link' href={this.props.history.push('/login')}> LOGIN</a>
              <a className='link' href={this.props.history.push('/signup')}> SIGN UP</a>
              <a className='link' href={this.props.history.push('/post')}> SELL</a>
              <a className='link' href={this.props.history.push('/shop')}> SHOP</a>
              <a className='link' href={this.props.history.push('/cart')}> CART</a>
         
          </nav>
     

        ) : null }
        </div>
        <div className="body">

          {routes}
        


        </div>
        <div id='footer'>
          <span className="footer">HELP</span>
          <span className="footer">TERMS</span>
          <span className="footer">PRIVACY</span>
          <span className="footer main">OFFER UP</span>
          <span className="footer">CONTACT</span>
          <span className="footer">ABOUT</span>
          <span className="footer">PRICING</span>
        </div>
      </div>
    );
  }
}

export default App;
