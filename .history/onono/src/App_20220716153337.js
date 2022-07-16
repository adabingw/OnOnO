import React, { useState } from 'react';
import About from './Pages/About/About';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const [active,setActive] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          
        </Routes>
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
