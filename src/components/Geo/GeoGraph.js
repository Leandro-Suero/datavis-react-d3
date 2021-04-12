import React from "react";
import { useGeoData } from "./useData";
import { Marks } from "./Marks";
import "./styles.css";

const width = 960;
const height = 500;

const GeoGraph = () => {
  const data = useGeoData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
};

export default GeoGraph;
