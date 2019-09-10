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
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignUpForm} />
        </main>
        
      </div>
    )
  }
}
export default App