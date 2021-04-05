import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/quote" component={Quote} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
