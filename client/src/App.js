import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SiteNavbar from './components/SiteNavbar';
import LandingPage from './components/LandingPage';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ListStatements from './components/ListStatements';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  isLoggedIn() {
    console.log('check if logged in')
    axios.get('/users/verify')
    .then(res => {
      this.setState({ isLoggedIn: res.data.msg });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <SiteNavbar isLoggedIn={this.state.isLoggedIn} checkLoggedIn={() => this.isLoggedIn()} />
        <main>
          <Route exact path="/" render={ () => <LandingPage isLoggedIn={this.state.isLoggedIn} checkLoggedIn={() => this.isLoggedIn()} /> } />
          <Route path="/signup" render={ () => <SignUpForm isLoggedIn={this.state.isLoggedIn} checkLoggedIn={() => this.isLoggedIn()} /> } />
          <Route path="/login" render={ () => <LoginForm isLoggedIn={this.state.isLoggedIn} checkLoggedIn={() => this.isLoggedIn()} /> } />
          <Route path="/list" render={ () => <ListStatements isLoggedIn={this.state.isLoggedIn} checkLoggedIn={() => this.isLoggedIn()} /> } />
        </main>     
      </div>
    )
  }
}

export default App;