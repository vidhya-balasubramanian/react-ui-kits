import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Home from './pages/Home';
import AntDesign from './pages/ant-design/AntDesign';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AntDesign />
        </Route>
        <Route path="/ant-design">
          <AntDesign />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
