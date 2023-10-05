import { Avatar, Layout } from "antd";
import React from "react";
import {
    UserOutlined,
  } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
function Hearder({ colorBgContainer }) {
  return (
    <div>
      <Header
        className="d-flex justify-content-between"
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        Covid-19 Tracker
        <Avatar className="ml-20" size={40} icon={<UserOutlined />} />
      </Header>
    </div>
  );
  
}

export default Hearder;
