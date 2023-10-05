import React from "react";
import ReactECharts from "echarts-for-react";

const EChartsBarChart = ({ originalData }) => {
  let chartdata = Object.keys(originalData).map((key) => {
    let obj = {};
    obj = { key, ...originalData[key] };
    return obj;
  });
  // Define the chart options
  let dim = originalData.cases ? Object.keys(originalData.cases) : [];
  
  const option = {
    legend: { show: false },
    tooltip: {},
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    dataset: {
      dimensions: ["key", ...dim],
      source: chartdata,
    },
    xAxis: { type: "category" },
    yAxis: { type: "value" },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };

  return (
    <div>
      <ReactECharts option={option} style={{ height: "400px" }} />
    </div>
  );
};

export default EChartsBarChart;
