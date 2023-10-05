import React, { useState } from "react";
import { Layout, theme } from "antd";
import Sidebar from "../../Components/Sidebar";
import Hearder from "../../Components/Hearder";
import DashBoard from "../../Components/DashBoard";
const { Content } = Layout;
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemSelect = (key) => {
    setSelectedMenuItem(key);
  };

  // Define content components for each menu item
  const contentComponents = {
    1: <DashBoard />, // Replace with your actual content components
    2: <div>map</div>, // Replace with your actual content components
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar onSelectMenuItem={handleMenuItemSelect} />
      <Layout>
        <Hearder colorBgContainer={colorBgContainer} />
        <Content
          style={{
            margin: "5px 5px 0",
          }}
        >
          {contentComponents[selectedMenuItem]}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
