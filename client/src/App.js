import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SiteNavbar from './components/SiteNavbar';
import LandingPage from './components/LandingPage';
import SignUpForm from './components/SignUpForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteNavbar />
        <main>
          <Route exact path="/" render={ () => <LandingPage /> } />
          <Route path="/signup" render={ () => <SignUpForm /> } />
        </main>     
      </div>
    )
  }
}

export default App;