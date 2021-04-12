export const Marks = ({
  data,
  xScale,
  yScale,
  colorScale,
  xValue,
  yValue,
  colorValue,
  tooltipFormat,
  circleRadius,
}) =>
  data.map((d, i) => (
    <circle
      key={i}
      className="marks"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
      fill={colorScale(colorValue(d))}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
