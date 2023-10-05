import React from "react";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Sider } = Layout;

function Sidebar({ onSelectMenuItem }) {
  const item = [
    {
      key: 1,
      icon: <UploadOutlined />,
      label: "Dashboard",
    },
    {
      key: 2,
      icon: <UserOutlined />,
      label: "Map",
    },
  ];
  return (
    <div className="sidebar">
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          {item.map((menuItem) => (
            <Menu.Item
              key={menuItem.key}
              icon={menuItem.icon}
              onClick={() => onSelectMenuItem(menuItem.key)}
            >
              {menuItem.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </div>
  );
}

export default Sidebar;
