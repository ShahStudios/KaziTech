import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/HomePage/Home'
import AboutUs from './components/pages/AboutUs/AboutUs'
import Services from './components/pages/Services/Services';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
