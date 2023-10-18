import palette from "@evilmartians/harmony/base";
import { scaleBand, scaleLinear } from "d3-scale";

import { simpleBarChartData } from "./constants";
import type { SimpleBarChartDatum } from "./shared.types";

function SimpleBarChart() {
  const width = 500;
  const height = width;
  const margin = { top: 0, bottom: 0, left: 0, right: 0 };

  const boundedWidth = width - margin.left - margin.right;
  const boundedHeight = height - margin.top - margin.bottom;

  const xAccessor = (d: SimpleBarChartDatum) => d.a;
  const yAccessor = (d: SimpleBarChartDatum) => d.b;

  // https://d3js.org/d3-scale/band
  const xScale = scaleBand()
    .domain(simpleBarChartData.map(xAccessor))
    .range([0, boundedWidth])
    .paddingInner(0.1)
    .paddingOuter(0);

  // https://d3js.org/d3-scale/linear
  const yScale = scaleLinear()
    .domain([0, Math.max(...simpleBarChartData.map(yAccessor))])
    .range([boundedHeight, 0])
    .nice();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {simpleBarChartData.map((d) => {
          const xValue = xAccessor(d);

          const barX = xScale(xValue);
          const barY = yScale(yAccessor(d));

          const barWidth = xScale.bandwidth();
          const barHeight = yScale(0) - barY;

          return (
            <rect
              key={`bar-${xValue}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={palette.slate["900"]}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default SimpleBarChart;
