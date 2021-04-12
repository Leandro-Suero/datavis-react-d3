import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
  worldAtlas: { land, interiors },
  cities,
  sizeScale,
  sizeValue,
}) => (
  <g className="marks">
    <path className="sphere" d={path({ type: "Sphere" })} />
    <path className="graticules" d={path(graticule())} />
    {land.features.map((feature, i) => (
      <path className="land" d={path(feature)} key={i} />
    ))}
    <path className="interiors" d={path(interiors)} />
    {cities.map((c, i) => {
      const [x, y] = projection([c.lng, c.lat]);
      return <circle cx={x} cy={y} r={sizeScale(sizeValue(c))} key={i} />;
    })}
  </g>
);
