import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './container/homepage';
import Navbar from './components/Navbar';

const AppIndex = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={homePage} />
        </Switch>
      </Router>
    </>
  );
};

export default AppIndex;
