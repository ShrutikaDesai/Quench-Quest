import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Card, Row, Col, Table, Tag, Button } from "antd";
import {
  PieChartOutlined,
  FileTextOutlined,
  TeamOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  // Dummy data for tables
  const programsData = [
    {
      key: "1",
      name: "Education & Child Welfare",
      activities: "School support, Workshops, Nutritional programs",
      beneficiaries: ["Children", "SC", "ST"],
    },
    {
      key: "2",
      name: "Women & Maternal Health",
      activities: "Health camps, Nutrition, Hygiene awareness",
      beneficiaries: ["Women", "Expectant Mothers", "Rural Communities"],
    },
  ];

  const projectsData = [
    {
      key: "1",
      name: "Rural Education Initiative",
      category: "Education",
      tags: ["Rural"],
    },
    {
      key: "2",
      name: "Vocational Training for Youth",
      category: "Skill Training",
      tags: ["Urban Slum"],
    },
  ];

  const contactData = [
    {
      key: "1",
      name: "John Doe",
      email: "john@example.com",
      message: "I want to know more about your programs",
      status: "Unread",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Interested in volunteering",
      status: "Read",
    },
  ];

  // Table columns
  const programsColumns = [
    { title: "Program Name", dataIndex: "name", key: "name" },
    { title: "Activities", dataIndex: "activities", key: "activities" },
    {
      title: "Beneficiaries",
      dataIndex: "beneficiaries",
      key: "beneficiaries",
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="green" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="primary">Edit</Button>,
    },
  ];

  const projectsColumns = [
    { title: "Project Name", dataIndex: "name", key: "name" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="primary">Edit</Button>,
    },
  ];

  const contactColumns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Message", dataIndex: "message", key: "message" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Unread" ? "red" : "green"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="primary">Mark as Read</Button>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Admin
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            Programs
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            Projects & Impact
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            Focus Areas
          </Menu.Item>
          <Menu.Item key="5" icon={<MailOutlined />}>
            Contact Messages
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center", color: "#fff" }}
        >
          <h2 style={{ color: "#fff" }}>Quench Quest Admin Dashboard</h2>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card title="Total Programs" bordered={false}>
                10
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Total Projects" bordered={false}>
                8
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Focus Areas" bordered={false}>
                5
              </Card>
            </Col>
            <Col span={6}>
              <Card title="New Messages" bordered={false}>
                3
              </Card>
            </Col>
          </Row>

          {/* Programs Table */}
          <Card title="Manage Programs" style={{ marginTop: 16 }}>
            <Table dataSource={programsData} columns={programsColumns} />
          </Card>

          {/* Projects Table */}
          <Card title="Manage Projects & Impact" style={{ marginTop: 16 }}>
            <Table dataSource={projectsData} columns={projectsColumns} />
          </Card>

          {/* Contact Messages Table */}
          <Card title="Contact Messages" style={{ marginTop: 16 }}>
            <Table dataSource={contactData} columns={contactColumns} />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
