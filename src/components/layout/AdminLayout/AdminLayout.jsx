// src/pages/admin/AdminLayout.js
import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid, Breadcrumb, Avatar, Dropdown, Typography } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  DashboardOutlined,
  MenuOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Get username from localStorage (or change this to your auth state)
  const username = localStorage.getItem("username") || "Admin";

  // Map pathnames to breadcrumb names
  const breadcrumbNameMap = {
    "/admin/dashboard": "Dashboard",
    "/admin/users": "User List",

  };

  // Build breadcrumb items
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: breadcrumbNameMap[url] || url,
    };
  });
  const breadcrumbItems = [
    { key: "/admin/dashboard", title: ".." },
    ...extraBreadcrumbItems.slice(1),
  ];

  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined style={{ color: "white" }} />,
      label: "Dashboard",
      onClick: () => navigate("/admin/dashboard"),
      style: { marginBottom: "10px" },
    },
    {
      key: "2",
      icon: <UserOutlined style={{ color: "white" }} />,
      label: "User List",
      onClick: () => navigate("/admin/users"),
      style: { marginBottom: "10px" },
    },
 
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  const MenuContent = (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={menuItems}
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        flex: 1,
      }}
      theme="dark"
    />
  );

  const LogoutButton = (
    <div style={{ padding: "16px", textAlign: "center", marginTop: "440px" }}>
      <Button
        type="primary"
        icon={<LogoutOutlined />}
        onClick={handleLogout}
        style={{ width: "100%", background: "#2E7D6F", borderColor: "#2E7D6F" }}
      >
        Logout
      </Button>
    </div>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Desktop Sidebar */}
      {!screens.xs && (
        <Sider
          width={220}
          style={{
            backgroundColor: "#001f3f",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <h2
            style={{
              color: "white",
              padding: "16px",
              margin: 0,
              textAlign: "center",
            }}
          >
            Admin Panel
          </h2>
          <div
            style={{
              flex: 1,
              marginTop: "24px",
              width: "190px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {MenuContent}
          </div>
          {/* Logout at bottom */}
          {LogoutButton}
        </Sider>
      )}

      {/* Drawer for Mobile */}
      {screens.xs && (
        <Drawer
          title="Admin Panel"
          placement="left"
          closable
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          bodyStyle={{
            padding: 0,
            backgroundColor: "#001f3f",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
          headerStyle={{ backgroundColor: "#001f3f", color: "white" }}
          closeIcon={<span style={{ color: "white", fontSize: 20 }}>×</span>}
        >
          <div>{MenuContent}</div>
          {LogoutButton}
        </Drawer>
      )}

      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Breadcrumb
              separator="/"
              items={breadcrumbItems}
              style={{ margin: 0, fontSize: 18, fontWeight: 500 }}
            />
          </div>

          {/* Profile Avatar + Username */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Text strong>{username}</Text>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </div>
          {/* Mobile Menu Button */}
          {screens.xs && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
            />
          )}
        </Header>

        <Content
          style={{
            margin: "16px",
            padding: "16px",
            background: "#f0f2f5",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
