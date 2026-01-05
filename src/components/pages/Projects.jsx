import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Tag, Typography } from "antd";
import { motion } from "framer-motion";

/* ===================== PROJECT IMAGES ===================== */
import story1 from "../../assets/story1.png";
import story2 from "../../assets/story2.png";
import story3 from "../../assets/story3.png";
import story4 from "../../assets/story4.png";

/* ===================== TRAINING IMAGES ===================== */
import training1 from "../../assets/story9.jpg";
import training2 from "../../assets/story8.jpg";
import training3 from "../../assets/story11.jpg";

const { Title, Paragraph } = Typography;

/* ===================== PROJECT DATA (WITH STATS) ===================== */
const projectsData = [
  {
    title: "Rural Education Initiative",
    program: "Education & Child Welfare",
    description:
      "Establishing learning centers in remote rural areas to provide quality education, improve literacy rates, and support holistic child development.",
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
      "Workshops for women in urban slums to enhance health awareness and economic independence.",
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
      "Skill-based training enabling sustainable livelihoods and self-reliance.",
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
      "Awareness campaigns to prevent child labour and protect children’s rights.",
    stats: {
      "Children Rescued": "120+",
      "Community Workshops": 20,
      "Awareness Campaigns": "50+",
    },
    label: "Urban Slum",
    image: story2,
  },
];

/* ===================== TRAINING DATA (NO STATS) ===================== */
const trainingPrograms = [
  {
    title: "Short-Term Skill Training",
    program: "Training & Development",
    label: "Skill Training",
    description:
      "Focused programs designed to enhance immediate employability through practical and job-oriented skills.",
    image: training1,
  },
  {
    title: "Long-Term Skill Development",
    program: "Training & Development",
    label: "Career Growth",
    description:
      "Structured and certified programs ensuring long-term career growth and industry readiness.",
    image: training2,
  },
  {
    title: "Livelihood & Entrepreneurship Support",
    program: "Training & Development",
    label: "Livelihood",
    description:
      "Empowering individuals through self-employment guidance, entrepreneurship, and job placement support.",
    image: training3,
  },
];

/* ===================== FILTERS ===================== */
const programFilters = [
  "All",
  "Education & Child Welfare",
  "Health Assistance & Awareness",
  "Livelihood & Skill Training",
  "Anti-Child Labour & Advocacy",
  "Training & Development",
];

/* ===================== COMPONENT ===================== */
const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allCards = [...projectsData, ...trainingPrograms];

  const visibleCards =
    filter === "All"
      ? allCards
      : filter === "Training & Development"
      ? trainingPrograms
      : projectsData.filter((item) => item.program === filter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerStyle = {
    padding: isMobile ? "20px 12px 60px" : "40px 100px 100px",
    background: "#ffffff",
  };

  /* ===== COMMON CARD STYLE WITH BOX SHADOW ===== */
  const cardStyle = {
    borderRadius: 14,
    height: "100%",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  };

  return (
    <div>
      {/* ================= HERO ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{
          padding: "80px 20px",
          background: "#f5f8fc",
          textAlign: "center",
        }}
      >
        <Title level={2}>Our Projects & Impact</Title>
        <Paragraph style={{ maxWidth: 700, margin: "0 auto" }}>
          Explore the tangible outcomes of our dedication to social welfare,
          empowerment, and community development.
        </Paragraph>
        <Button type="primary">Download Impact Report</Button>
      </motion.div>

      {/* ================= FILTERS ================= */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        {programFilters.map((prog) => (
          <Button
            key={prog}
            type={filter === prog ? "primary" : "default"}
            style={{ margin: 6 }}
            onClick={() => setFilter(prog)}
          >
            {prog}
          </Button>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      {filter === "Training & Development" ? (
        /* ===== TRAINING DETAIL VIEW ===== */
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            padding: isMobile ? "40px 16px" : "80px 100px",
          }}
        >
          <Row gutter={[24, 24]}>
            {trainingPrograms.map((item, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <Card
                  hoverable
                  style={cardStyle}
                  cover={
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ height: 240, objectFit: "cover" }}
                    />
                  }
                >
                  <Tag color="green">{item.label}</Tag>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                  <Button style={{ marginTop: 10 }}>Learn More</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      ) : (
        /* ===== ALL + PROJECT FILTER VIEW ===== */
        <div style={containerStyle}>
          <Row gutter={[24, 24]}>
            {visibleCards.map((item, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <Card
                  hoverable
                  style={cardStyle}
                  cover={
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ height: 260, objectFit: "cover" }}
                    />
                  }
                >
                  <Tag
                    color={
                      item.program === "Training & Development"
                        ? "green"
                        : "blue"
                    }
                  >
                    {item.label}
                  </Tag>

                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>

                  {/* ===== STATS ONLY FOR PROJECTS ===== */}
                  {item.stats &&
                    Object.entries(item.stats).map(([key, value]) => (
                      <Paragraph key={key} style={{ marginBottom: 4 }}>
                        <strong>{key}:</strong>{" "}
                        <span
                          style={{
                            color: "#1f7a34",
                            fontWeight: 600,
                          }}
                        >
                          {value}
                        </span>
                      </Paragraph>
                    ))}

                  <Button style={{ marginTop: 10 }}>
                    {item.program === "Training & Development"
                      ? "Learn More"
                      : "View Case Study"}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Projects;
