import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import BarGraph from "./components/Bar/BarGraph";
import LineGraph from "./components/Line/LineGraph";
import GeoGraph from "./components/Geo/GeoGraph";
import ScatterGraph from "./components/Scatter/ScatterGraph";
import InteractiveGraph from "./components/Interactive/InteractiveGraph";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bar">
          <BarGraph />
        </Route>
        <Route exact path="/line">
          <LineGraph />
        </Route>
        <Route exact path="/geo">
          <GeoGraph />
        </Route>
        <Route exact path="/scatter">
          <ScatterGraph />
        </Route>
        <Route exact path="/interactive">
          <InteractiveGraph />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
