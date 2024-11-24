import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link to="/">User List</Link>,
  },
  {
    key: "2",
    icon: <PlusOutlined />,
    label: <Link to="/add-user">Add New User</Link>,
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ height: "100vh", overflow: "auto" }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#001529",
          color: "white",
        }}
      >
        {collapsed ? (
          <img src="/Icon.png" alt="Logo" style={{ width: 40 }} />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "50px",
            }}
          >
            <img src="/Icon.png" alt="Logo" style={{ width: 40 }} />
            <span style={{ fontSize: 16, fontWeight: "bold" }}>
              Users Management
            </span>
          </div>
        )}
      </div>
      <Menu theme="dark" mode="inline" items={menuItems} />;
    </Sider>
  );
}
