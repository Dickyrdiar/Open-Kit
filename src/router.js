import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './container/homepage';
import Navbar from './components/Navbar';
import Login from './container/login';
import Testing from './container/Testing';

const AppIndex = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/testing" component={Testing} />
        </Switch>
      </Router>
    </>
  );
};

export default AppIndex;
