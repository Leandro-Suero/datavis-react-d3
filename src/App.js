import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import BarGraph from "./components/graphs/Bar/BarGraph";
import LineGraph from "./components/graphs/Line/LineGraph";
import GeoGraph from "./components/graphs/Geo/GeoGraph";
import ScatterGraph from "./components/graphs/Scatter/ScatterGraph";
import InteractiveGraph from "./components/graphs/Interactive/InteractiveGraph";

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
