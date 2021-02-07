import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import GraphQl from "./pages/GraphQl";
import AntDesign from "./pages/ant-design/AntDesign";
import VideoPlayer from "./pages/VideoPlayer";


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <VideoPlayer />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/ant-design">
          <AntDesign />
        </Route>
        <Route path="/graph-ql">
          <GraphQl />
        </Route>
        <Route path="/video-player">
          <VideoPlayer />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
