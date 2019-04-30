import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Dashresto from './container/dashresto/dashresto';
import Home from './container/Home/home';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restoran" component={Dashresto} />
        </Switch>
      </div>
    );
  }
}

export default App;
