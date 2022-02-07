import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wallets from './components/pages/Wallets';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Consulting from './components/pages/Consulting';
import Ethereum from './components/pages/Ethereum';
import Chat from './components/pages/Chat';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/wallets' component={Wallets} />
        <Route path='/chat' component={Chat} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/ethereum' component={Ethereum} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
