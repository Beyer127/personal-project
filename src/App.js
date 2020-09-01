import React from 'react';
import './App.css';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <nav>Craig's List Killers</nav>
      {routes}
    </div>
  );
}

export default App;
