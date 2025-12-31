import React, { useState } from "react";
import { Row, Col, Card, Button, Tag, Typography } from "antd";
import { motion } from "framer-motion"; // <-- Framer Motion
import story1 from "../../assets/story1.png";
import story2 from "../../assets/story2.png";
import story3 from "../../assets/story3.png";
import story4 from "../../assets/story4.png";

const { Title, Paragraph } = Typography;

const projectsData = [
  {
    title: "Rural Education Initiative",
    program: "Education & Child Welfare",
    description:
      "Establishing learning centers in remote rural areas to provide quality education, improve literacy rates, and support the holistic development of underserved children.",
    stats: {
      "Children Enrolled": "500+",
      "Villages Covered": 10,
      "Literacy Rate Increase": "30%",
    },
    label: "Rural",
    image: story1,
  },
  {
    title: "Women Empowerment Workshops",
    program: "Health Assistance & Awareness",
    description:
      "Organizing workshops for women in urban slums to enhance health awareness, develop vocational skills, and foster economic independence for marginalized communities.",
    stats: {
      "Women Trained": "350+",
      "Businesses Started": 75,
      "Health Literacy Increase": "40%",
    },
    label: "Urban Slum",
    image: story3,
  },
  {
    title: "Vocational Training for Youth",
    program: "Livelihood & Skill Training",
    description:
      "Providing skill-based training programs to unemployed youth, enabling sustainable livelihoods, self-reliance, and social integration in marginalized communities.",
    stats: {
      "Youth Trained": "600+",
      "Job Placements": "450+",
      "Average Wage Increase": "25%",
    },
    label: "Urban Slum",
    image: story4,
  },
  {
    title: "Child Labour Awareness Program",
    program: "Anti-Child Labour & Advocacy",
    description:
      "Conducting awareness campaigns and community interventions to prevent child labor, protect children’s rights, and promote social justice in vulnerable areas.",
    stats: {
      "Children Rescued": "120+",
      "Community Workshops": 20,
      "Awareness Campaigns": "50+",
    },
    label: "Urban Slum",
    image: story2,
  },
];

const programFilters = [
  "All",
  "Education & Child Welfare",
  "Health Assistance & Awareness",
  "Livelihood & Skill Training",
  "Anti-Child Labour & Advocacy",
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.program === filter);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{
          padding: "80px 20px",
          background: "#f5f8fc",
          textAlign: "center",
        }}
      >
        <Title level={2}>Our Projects & Impact</Title>
        <Paragraph>
          Explore the tangible outcomes of our dedication to social welfare and
          empowerment. Discover how we're making a difference in communities.
        </Paragraph>
        <Button type="primary">Download Impact Report</Button>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        style={{ textAlign: "center", margin: "40px 0" }}
      >
        {programFilters.map((prog, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            style={{ display: "inline-block", margin: "0 8px 8px 0" }}
          >
            <Button
              type={filter === prog ? "primary" : "default"}
              onClick={() => setFilter(prog)}
            >
              {prog}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Cards Section */}
      <div style={{ padding: "40px 100px 100px", background: "#ffffff" }}>
        <Row gutter={[24, 24]}>
          {filteredProjects.map((project, idx) => (
            <Col xs={24} sm={24} md={12} lg={8} key={idx}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "auto",
                  minHeight: 600,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                }}
                bodyStyle={{
                  padding: "16px 16px 24px 16px",
                }}
                cover={
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: 350,
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div>
                  <div style={{ marginBottom: 12 }}>
                    <Tag color="blue">{project.label}</Tag>
                  </div>
                  <Title level={4}>{project.title}</Title>
                  <Paragraph>{project.description}</Paragraph>
                  <div style={{ marginTop: 12 }}>
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <Paragraph key={i} style={{ marginBottom: 4 }}>
                        <strong>{key}:</strong>{" "}
                        <span style={{ color: "#1f7a34ff", fontWeight: 600 }}>
                          {value}
                        </span>
                      </Paragraph>
                    ))}
                  </div>
                </div>
                <Button type="default" style={{ marginTop: 10 }}>
                  View Case Study
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
