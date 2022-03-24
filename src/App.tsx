import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './routing.component';

function App() {
  return (
    <div className="container">
      <Router>
        <RouterComponent />
      </Router>
    </div>
  );
}

export default App;
