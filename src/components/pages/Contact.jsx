import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Divider,
  ConfigProvider,
  Collapse,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  HeartFilled,
  TeamOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion"; // <-- Import Framer Motion

import antdTheme from "../../theme/antdTheme";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Panel } = Collapse;


const Contact = () => {
  const { colorPrimary, colorTextSecondary } = antdTheme.token;

  const onFinish = (values) => {
    console.log("Contact Form Data:", values);
  };

  // Motion variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
   // FAQ data
  const faqs = [
    {
      question: "How can I donate to Quench Quest Social Foundation?",
      answer:
        "You can donate via our website using the 'Donate' button or contact us directly for bank transfer options.",
    },
    {
      question: "What programs does the foundation currently run?",
      answer:
        "We run programs focusing on Education & Child Welfare, Health Assistance & Awareness, Livelihood & Skill Training, and Anti-Child Labour & Advocacy.",
    },
    {
      question: "How can I volunteer with Quench Quest?",
      answer:
        "You can volunteer by signing up on our website or contacting us directly to learn about upcoming events and opportunities.",
    },
    {
      question: "Who are the beneficiaries of your programs?",
      answer:
        "Our programs benefit children, women, and marginalized communities in both rural and urban areas.",
    },
  ];

  return (
    <ConfigProvider theme={antdTheme}>
      <Layout>
        <Content style={{ background: "#ffffff" }}>

          {/* HERO SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            style={{
              padding: "90px 20px",
              background: "#f5f8fc",
              textAlign: "center",
            }}
          >
            <Title level={2}>
              Get In <span style={{ color: colorPrimary }}>Touch</span>
            </Title>

            <Divider plain>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  color: colorPrimary,
                  fontSize: 22,
                }}
              >
                <span style={{ width: 40, height: 2, background: colorPrimary }} />
                <HeartFilled />
                <span style={{ width: 40, height: 2, background: colorPrimary }} />
              </span>
            </Divider>

            <Paragraph
              style={{
                maxWidth: 720,
                margin: "0 auto",
                fontSize: 16,
                color: colorTextSecondary,
                lineHeight: 1.8,
              }}
            >
              Every voice matters and every helping hand counts. Whether you wish to support
              our mission, seek guidance, or stand with us in uplifting underprivileged
              communities, we welcome you to connect and be a part of our journey toward a
              more inclusive and compassionate society.
            </Paragraph>
          </motion.div>

          {/* PURPOSE CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            style={{ padding: "60px 20px" }}
          >
            <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1100, margin: "0 auto" }}>
              {[
                {
                  icon: <TeamOutlined style={{ fontSize: 36, color: colorPrimary }} />,
                  title: "Volunteer With Us",
                  description:
                    "Become a part of our mission to uplift children, women, and marginalized communities.",
                },
                {
                  icon: <HeartFilled style={{ fontSize: 36, color: colorPrimary }} />,
                  title: "Support Our Work",
                  description:
                    "Your contribution helps us run education, health, and livelihood programs.",
                },
                {
                  icon: <SafetyOutlined style={{ fontSize: 36, color: colorPrimary }} />,
                  title: "Need Assistance",
                  description:
                    "Reach out if you or your community requires guidance or welfare support.",
                },
              ].map((card, index) => (
                <Col xs={24} md={8} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card hoverable style={{ textAlign: "center", borderRadius: 16 }}>
                      {card.icon}
                      <Title level={5} style={{ marginTop: 16 }}>
                        {card.title}
                      </Title>
                      <Paragraph>{card.description}</Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          {/* CONTACT DETAILS + FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            style={{ padding: "80px 20px", background: "#f9fbfa" }}
          >
            <Row gutter={[40, 40]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
              {/* Contact Info */}
              <Col xs={24} md={10}>
                <motion.div variants={fadeInUp}>
                  <div
                    style={{
                      background: "#ffffff",
                      padding: "50px 40px",
                      borderRadius: antdTheme.token.borderRadius + 4,
                      height: "100%",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Title
                      level={2}
                      style={{
                        fontWeight: 700,
                        letterSpacing: 1,
                        color: antdTheme.token.colorTextSecondary,
                        marginBottom: 24,
                      }}
                    >
                      CONTACT US
                    </Title>

                    <Divider
                      style={{
                        margin: "16px 0 36px",
                        borderColor: antdTheme.token.colorPrimary,
                        opacity: 0.3,
                      }}
                    />

                    <Paragraph
                      style={{
                        fontSize: 17,
                        lineHeight: 1.9,
                        color: antdTheme.token.colorTextSecondary,
                        marginBottom: 45,
                      }}
                    >
                      Please write to us if you would like to get involved and become part of
                      our journey in transforming children’s lives.
                    </Paragraph>

                    {/* Address */}
                    <div style={{ display: "flex", gap: 18, marginBottom: 28 }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          background: `${antdTheme.token.colorPrimary}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ fontSize: 22, color: antdTheme.token.colorPrimary }}
                        />
                      </div>

                      <Paragraph
                        style={{
                          fontSize: 16,
                          color: antdTheme.token.colorTextSecondary,
                          margin: 0,
                        }}
                      >
                        Vrindavan Society, Baif Rd
                        <br />
                        near Samindra Devi Market, Wagholi
                        <br />
                        Pune, Maharashtra - 412207
                      </Paragraph>
                    </div>

                    {/* Phone */}
                    <div style={{ display: "flex", gap: 18, marginBottom: 28 }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          background: `${antdTheme.token.colorPrimary}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PhoneOutlined
                          style={{ fontSize: 22, color: antdTheme.token.colorPrimary }}
                        />
                      </div>

                      <Paragraph
                        style={{
                          fontSize: 16,
                          color: antdTheme.token.colorTextSecondary,
                          margin: 0,
                        }}
                      >
                        +91 9765083269
                      </Paragraph>
                    </div>

                    {/* Email */}
                    <div style={{ display: "flex", gap: 18 }}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          background: `${antdTheme.token.colorPrimary}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MailOutlined
                          style={{ fontSize: 22, color: antdTheme.token.colorPrimary }}
                        />
                      </div>

                      <Paragraph
                        style={{
                          fontSize: 16,
                          color: antdTheme.token.colorTextSecondary,
                          margin: 0,
                        }}
                      >
                        thequenchquestteam@gmail.com
                      </Paragraph>
                    </div>
                  </div>
                </motion.div>
              </Col>

              {/* Contact Form */}
              <Col xs={24} md={10}>
                <motion.div variants={fadeInUp}>
                  <Card
                    style={{
                      borderRadius: antdTheme.token.borderRadius + 4,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                      padding: "10px",
                    }}
                  >
                    <Title
                      level={4}
                      style={{
                        marginBottom: 24,
                        color: antdTheme.token.colorText,
                      }}
                    >
                      Send a Message
                    </Title>

                    <Form layout="vertical" onFinish={onFinish}>
                      <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email" }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item label="Phone" name="phone">
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true }]}
                      >
                        <TextArea rows={4} />
                      </Form.Item>

                      <Button type="primary" block>
                        Submit
                      </Button>
                    </Form>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </motion.div>

          {/* MAP SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ padding: "60px 20px", background: "#ffffff" }}
          >
            <Row justify="center">
              <Col xs={24} md={20}>
                <Card style={{ borderRadius: 20, overflow: "hidden" }}>
                  <iframe
                    title="NGO Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.87890863298!2d73.95966658715821!3d18.575403500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c39cb89619e3%3A0x9103595adc5a6c0a!2sSamindra%20Devi%20Market!5e0!3m2!1sen!2sin!4v1767094098880!5m2!1sen!2sin"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </Card>
              </Col>
            </Row>
          </motion.div>


{/* FAQ SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            style={{ padding: "80px 20px", background: "#f5f8fc" }}
          >
            <Row justify="center">
              <Col xs={24} md={16}>
                <Title level={2} style={{ textAlign: "center", marginBottom: 16 }}>
                  Frequently Asked Questions
                </Title>
                <Paragraph style={{ textAlign: "center", marginBottom: 40, color: colorTextSecondary }}>
                  Find quick answers to common questions about our foundation, programs, and how you can contribute.
                </Paragraph>

                <Collapse
                  bordered={false}
                  defaultActiveKey={[]}
                  expandIconPosition="right"
                  style={{ background: "transparent" }}
                >
                  {faqs.map((faq, idx) => (
                    <Panel
                      header={faq.question}
                      key={idx}
                      style={{
                        borderRadius: 8,
                        marginBottom: 16,
                        background: "#ffffff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        fontWeight: 500,
                      }}
                    >
                      <Paragraph style={{ margin: 0, color: colorTextSecondary }}>
                        {faq.answer}
                      </Paragraph>
                    </Panel>
                  ))}
                </Collapse>
              </Col>
            </Row>
          </motion.div>
          
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Contact;
