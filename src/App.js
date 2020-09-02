import React from 'react';
import './App.css';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <nav>OFFER UP
      <span><i class="fas fa-user"></i> <a href="http://localhost:3000/#/">LOGIN</a></span>
      <span><i class="fas fa-user-plus"></i> <a href="http://localhost:3000/#/">SIGN UP</a></span>
      <span><i class="fas fa-camera"></i> <a href="http://localhost:3000/#/addpost">SELL</a></span>
      <span><i class="fas fa-money-check"></i> <a href="http://localhost:3000/#/posts">SHOP</a></span>
      </nav>
      
      {routes}
    </div>
  );
}

export default App;
