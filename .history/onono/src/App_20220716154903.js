import React, { useState } from 'react';
import About from './Pages/About/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {  

  const [active,setActive] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" component={StartScreen}} />
          <Route exact path="/about" component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
