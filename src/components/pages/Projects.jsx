import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Tag, Typography } from "antd";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../slices/projectSlice";

const { Title, Paragraph } = Typography;

/* ===================== FILTERS ===================== */
const programFilters = [
  "All",
  "Education & Child Welfare",
  "Health Assistance & Awareness",
  "Livelihood & Skill Training",
  "Anti-Child Labour & Advocacy",
  "Training & Development",
];

/* ===================== CATEGORY MAP ===================== */
const CATEGORY_MAP = {
  6: "Education & Child Welfare",
  7: "Health Assistance & Awareness",
  8: "Livelihood & Skill Training",
  9: "Anti-Child Labour & Advocacy",
  10: "Training & Development",
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const dispatch = useDispatch();
  const { list: apiProjects, loading } = useSelector(
    (state) => state.projects
  );

  /* ===================== FETCH DATA ===================== */
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  /* ===================== RESPONSIVE ===================== */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===================== MAP BACKEND DATA ===================== */
  const mappedProjects = apiProjects.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.sub_description,
    label: item.tag,
    image_url: item.image_url,
    program: CATEGORY_MAP[item.category] || "Others",
    stats: {
      [item.imapct_1_label]: item.imapct_1_value,
      [item.imapct_2_label]: item.imapct_2_value,
      [item.imapct_3_label]: item.imapct_3_value,
    },
  }));

  /* ===================== FILTER LOGIC ===================== */
  const visibleCards =
    filter === "All"
      ? mappedProjects
      : mappedProjects.filter((item) => item.program === filter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerStyle = {
    padding: isMobile ? "20px 12px 60px" : "40px 100px 100px",
    background: "#ffffff",
  };

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
      <div style={containerStyle}>
        <Row gutter={[24, 24]}>
          {loading ? (
            <Paragraph>Loading projects...</Paragraph>
          ) : (
            visibleCards.map((item) => (
              <Col xs={24} md={12} lg={8} key={item.id}>
                <Card
                  hoverable
                  style={cardStyle}
                  cover={
                    <img
                      src={item.image_url}
                      alt={item.title}
                      style={{ height: 260, objectFit: "cover" }}
                    />
                  }
                >
                  <Tag color="blue">{item.label}</Tag>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>

                  {/* ===== IMPACT STATS ===== */}
                  {Object.entries(item.stats).map(([key, value]) => (
                    <Paragraph key={key} style={{ marginBottom: 4 }}>
                      <strong>{key}</strong>{" "}
                      <span style={{ color: "#1f7a34", fontWeight: 600 }}>
                        {value}
                      </span>
                    </Paragraph>
                  ))}

                  <Button style={{ marginTop: 10 }}>
                    View Case Study
                  </Button>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
