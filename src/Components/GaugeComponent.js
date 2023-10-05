import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { useState } from "react";

const GaugeChart = ({ data }) => {
  const gaugeData = [
    {
      value: Math.round((data?.cases / data?.population) * 100) || 0,
      name: "Cases",
      title: {
        offsetCenter: ["0%", "-30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-20%"],
      },
    },
    {
      value: Math.round((data?.deaths / data?.population) * 100) || 0,
      name: "Death",
      title: {
        offsetCenter: ["0%", "0%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "10%"],
      },
    },
    {
      value: Math.round((data?.recovered / data?.population) * 100) || 0,
      name: "Recovered",
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "40%"],
      },
    },
  ];

  useEffect(() => {
    const myChart = document.getElementById("main");
    const chartInstance = myChart && myChart.getEchartsInstance();

    if (chartInstance) {
      setInterval(() => {
        gaugeData[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData[1].value = +(Math.random() * 100).toFixed(2);
        gaugeData[2].value = +(Math.random() * 100).toFixed(2);

        chartInstance.setOption({
          series: [
            {
              data: gaugeData,
              pointer: {
                show: true,
              },
            },
          ],
        });
      }, 2000);
    }
  }, []);

  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#464646",
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,
        title: {
          fontSize: 10,
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: "inherit",
          borderColor: "inherit",
          borderRadius: 20,
          borderWidth: 1,
          formatter: "{value}%",
        },
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option}  />
    </div>
  );
};

export default GaugeChart;
