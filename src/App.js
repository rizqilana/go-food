import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Dashresto from './container/dashresto';
import Home from './container/home';
import DashFood from './container/dashfood';
import Tabel from './components/tabel/tabel';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restoran" exact component={Dashresto} />
          <Route path="/restoran/:id" component={DashFood} />
          <Route path="/tabel" component={Tabel} />
        </Switch>
      </div>
    );
  }
}

export default App;
