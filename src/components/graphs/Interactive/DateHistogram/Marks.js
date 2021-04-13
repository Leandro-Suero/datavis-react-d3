export const Marks = ({
  binnedData,
  xScale,
  yScale,
  tooltipFormat,
  innerHeight,
}) =>
  binnedData.map((d, i) => (
    <rect
      className="mark"
      x={xScale(d.x0)}
      y={yScale(d.y)}
      width={xScale(d.x1) - xScale(d.x0)}
      height={innerHeight - yScale(d.y)}
      key={i}
    >
      <title>{tooltipFormat(d.y)}</title>
    </rect>
  ));
