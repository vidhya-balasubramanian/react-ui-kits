import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import GraphQl from "./pages/GraphQl";
import AntDesign from "./pages/ant-design/AntDesign";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ant-design">
          <AntDesign />
        </Route>
        <Route path="/graph-ql">
          <GraphQl />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
