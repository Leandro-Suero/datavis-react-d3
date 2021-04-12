import React from "react";
import "./styles.css";
import Button from "../../Button";

const Home = () => {
  return (
    <div className="container">
      <h1>Data Visualization</h1>
      <Button route="/bar" text="Bar Chart" />
      <Button route="/line" text="Line Chart" />
      <Button route="/geo" text="Geo Map" />
      <Button route="/scatter" text="Scatter Graph" />
      <Button route="/interactive" text="Interactive Graph" />
    </div>
  );
};

export default Home;
