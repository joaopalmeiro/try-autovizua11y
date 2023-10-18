import { AutoVizuA11y } from "@feedzai/autovizua11y";

import { simpleBarChartData } from "./constants";
import SimpleBarChart from "./SimpleBarChart";

function App() {
  const autovizData = Object.fromEntries(
    simpleBarChartData.map((d) => [d.a, d.b])
  );

  return (
    <AutoVizuA11y
      data={autovizData}
      selectorType={{ element: "rect" }}
      type="Bar chart"
      descriptor="unit"
      title="Simple bar chart"
      context="Simple example to test AutoVizuA11y."
      manualDescriptions={{
        longer: "Random data taken from a Vega-Lite example.",
        shorter: "Random data.",
      }}
    >
      <SimpleBarChart />
    </AutoVizuA11y>
  );
}

export default App;
