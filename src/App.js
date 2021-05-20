import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Homepage from './pages/Homepage/Homepage';
import Feature1 from './pages/Feature1/Feature1';
import Feature2 from './pages/Feature2/Feature2';
import Feature3 from './pages/Feature3/Feature3';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/feature1'>
            <Feature1 />
          </Route>
          <Route path='/feature2'>
            <Feature2 />
          </Route>
          <Route path='/feature3'>
            <Feature3 />
          </Route>
          <Route path='/home'>
            <Homepage />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
