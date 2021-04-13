import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
import { useMemo } from "react";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
  worldAtlas: { land, interiors },
  data,
  sizeScale,
  sizeValue,
}) => (
  <g className="marks">
    {useMemo(
      () => (
        <>
          <path className="sphere" d={path({ type: "Sphere" })} />
          <path className="graticules" d={path(graticule())} />
          {land.features.map((feature, i) => (
            <path className="land" d={path(feature)} key={i} />
          ))}
          <path className="interiors" d={path(interiors)} />
        </>
      ),
      [land, interiors]
    )}
    {data.map((d, i) => {
      const [x, y] = projection(d.coords);
      return <circle cx={x} cy={y} r={sizeScale(sizeValue(d))} key={i} />;
    })}
  </g>
);
