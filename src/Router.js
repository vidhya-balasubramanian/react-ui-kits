import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Home from './pages/Home';
import AntDesign from './pages/ant-design/AntDesign';
import App from './pages/App';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/ant-design">
          <AntDesign />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
