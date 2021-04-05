import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Quote" component={Quote} />
        <Route exact path="/Calculator" component={Calculator} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
