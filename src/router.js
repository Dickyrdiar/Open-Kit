import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './container/homepage';
import Navbar from './components/Navbar';
import Login from './container/login';

const AppIndex = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={homePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default AppIndex;
