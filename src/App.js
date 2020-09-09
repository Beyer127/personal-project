import React from 'react';
import './App.css';
import routes from './routes'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      editPost: {}
    }
  }

  

  render(){
    return (
      <div>
        <nav>OFFER UP
          <i className="fas fa-shopping-cart"></i>
        <span><i className="fas fa-user"></i> <a className='link' href="http://localhost:3000/#/"> LOGIN</a></span>
        <span><i className="fas fa-user-plus"></i> <a className='link' href="http://localhost:3000/#/"> SIGN UP</a></span>
        <span><i className="fas fa-camera"></i> <a className='link' href="http://localhost:3000/#/addpost"> SELL</a></span>
        <span><i className="fas fa-money-check"></i> <a className='link' href="http://localhost:3000/#/posts"> SHOP</a></span>
        </nav>
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
