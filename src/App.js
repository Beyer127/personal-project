import React from 'react';
import './App.css';
import routes from './routes'
import {Link} from 'react-router-dom'

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
            <span><i className="fas fa-user"></i> <Link className='link' to={'/login'}> LOGIN</Link></span>
            <span><i className="fas fa-user-plus"></i> <Link className='link' to={'/'}> SIGN UP</Link></span>
            <span><i className="fas fa-camera"></i> <Link className='link' to={'/addPost'}> POST</Link></span>
            <span><i className="fas fa-money-check"></i> <Link className='link' to={'/posts'}> SHOP</Link></span>
            <span><i class="fas fa-shopping-cart"></i> <Link className='link' to={'/cart'}> CART</Link></span>
        </nav>
        <div className="dropdown" onClick={this.toggleDropDown}><i class="fas fa-bars burger"></i></div>
        { this.state.dropDown ? (
            <nav className="mobile-menu">
              <Link className='link' to={'/login'}> LOGIN</Link>
              <Link className='link' to={'/'}> SIGN UP</Link>
              <Link className='link' to={'/addPost'}> SELL</Link>
              <Link className='link' to={'/posts'}> SHOP</Link>
              <Link className='link' to={'/cart'}> CART</Link>
         
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
