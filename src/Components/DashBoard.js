import React, { useEffect, useState } from "react";
import { Col, Row, theme } from "antd";
import EChartsBarChart from "./ChartComponent";
import GaugeChart from "./GaugeComponent";

function DashBoard() {
  const [gaugedata, setGaugedata] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((response) => response.json())
        .then((data) => {
          setTableData(data);
        });
    };

    getCountriesData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setGaugedata(data);
        });
    };

    getData();
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={10} lg={8} xl={8}>
          <div style={{ minHeight: "250px", background: "#fff" }}>
            <GaugeChart data={gaugedata} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={8}>
          <div style={{ minHeight: "250px", background: "#fff" }}>
            <GaugeChart />
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={8}>
          <div style={{ minHeight: "250px", background: "#fff" }}>
            <GaugeChart />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div style={{ minHeight: "250px", background: "#fff" }}>
            <EChartsBarChart originalData={tableData} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DashBoard;
