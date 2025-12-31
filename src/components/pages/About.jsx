import React, { useState, useEffect } from "react";
import { Layout, Typography, Row, Col, Divider } from "antd";
import { motion } from "framer-motion";
import {
  HeartFilled,
  TeamOutlined,
  BookOutlined,
  SafetyOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import antdTheme from "../../theme/antdTheme";
import CountUp from "react-countup";
import { Carousel, Image } from "antd";

import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";

import award1 from "../../assets/news1.jpg";
import award2 from "../../assets/news2.jpg";
import award3 from "../../assets/news3.jpg";
import heroBg from "../../assets/hero-img1.png";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const partnerLogos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
];


const visionMission = [
  {
    title: "OUR VISION",
    desc:
      "To build an inclusive society where every child, woman, and individual lives with dignity, equality, and access to opportunities for holistic development.",
    icon: <RiseOutlined />,
  },
  {
    title: "OUR MISSION",
    desc:
      "To empower vulnerable communities through education, healthcare, livelihood support, and awareness initiatives while eliminating social evils and inequalities.",
    icon: <HeartFilled />,
  },
];

const teamMembers = [
  {
    name: "Dr. Anya Sharma",
    role: "Founder & CEO",
    desc:
      "A visionary leader with over two decades of experience in community development and social welfare initiatives.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Raj Patel",
    role: "Chief Programs Officer",
    desc:
      "Specializes in designing and implementing scalable welfare programs ensuring maximum impact in underserved communities.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // {
  //   name: "Ms. Priya Singh",
  //   role: "Head of Community Outreach",
  //   desc:
  //     "Dedicated to building strong relationships with local communities and understanding their unique needs firsthand.",
  //   img: "https://randomuser.me/api/portraits/women/65.jpg",
  // },
  // {
  //   name: "Mr. David Lee",
  //   role: "Impact Assessment Lead",
  //   desc:
  //     "Oversees data collection and analysis to measure project outcomes and ensure transparency and accountability.",
  //   img: "https://randomuser.me/api/portraits/men/54.jpg",
  // },
  // {
  //   name: "Dr. Sarah Khan",
  //   role: "Health & Education Director",
  //   desc:
  //     "A public health expert passionate about improving access to quality healthcare and education for women and children.",
  //   img: "https://randomuser.me/api/portraits/women/68.jpg",
  // },
  // {
  //   name: "Ms. Emily Chen",
  //   role: "Livelihood Training Coordinator",
  //   desc:
  //     "Develops and implements skill development programs that promote self-reliance and economic independence.",
  //   img: "https://randomuser.me/api/portraits/women/12.jpg",
  // },
];

const impactStats = [
  {
    count: 45000,
    suffix: '+',
    label: 'Children & Women Supported',
  },
  {
    count: 8500,
    suffix: '+',
    label: 'Skill & Awareness Programs Conducted',
  },
  {
    count: 520,
    suffix: '+',
    label: 'Rural & Urban Communities Reached',
  },
];


const awards = [
  {
    title: "‘iTrain on Wheels’ Wins Strategic CSR Project of the Year 2025",
    description:
      "At the 3rd Bharat CSR & Sustainability Summit, Quench Quest Social Foundation was recognized for its flagship initiative ‘iTrain on Wheels’, empowering thousands with skill-based education and entrepreneurial training across India.",
    image: award1,
    linkText: "View all →",
  },
  {
    title: "Excellence in Community Development Award",
    description:
      "Honored for outstanding contribution towards education, healthcare, and livelihood programs benefiting underserved communities nationwide.",
    image: award2,
    linkText: "View all →",
  },
  {
    title: "Best NGO for Social Impact",
    description:
      "Awarded for sustained impact, transparency, and innovation in social welfare initiatives focused on women and children.",
    image: award3,
    linkText: "View all →",
  },
];

// Motion variants for hero section
const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};
const titleVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const paraVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  const { colorPrimary, colorTextSecondary } = antdTheme.token;

  // Desktop helper (apply extra left padding on larger screens)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.matchMedia("(min-width: 992px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const handler = (e) => setIsDesktop(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  return (
    <Layout>

      {/* HERO SECTION */}
      <Content style={{ padding: "100px 20px", backgroundImage: `linear-gradient(rgba(24, 24, 25, 0.85), rgba(63, 64, 66, 0.85)), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', overflow: 'hidden' }}>
        {/* decorative floating shape */}
        <motion.div
          aria-hidden
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            right: -40,
            top: 20,
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            filter: 'blur(28px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Row justify="center">
          <Col xs={24} md={14} style={{ textAlign: "center", position: 'relative', zIndex: 1 }}>
            <motion.div
              variants={heroVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={titleVariant}>
                <Title level={1}>
                  <span style={{ color: antdTheme.token.colorBgHeader }}>ABOUT</span> <span style={{ color: colorPrimary }}>US</span>
                </Title>
              </motion.div>

              <motion.div variants={paraVariant}>
                <Paragraph
                  style={{
                    fontSize: 18,
                    color: antdTheme.token.colorBgHeader,
                    maxWidth: 800,
                    margin: "0 auto",
                    lineHeight: 1.7,
                  }}
                >
                  Quench Quest Social Foundation is committed to empowering
                  marginalized communities through sustainable social welfare,
                  education, healthcare, and livelihood initiatives.
                </Paragraph>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Content>


      {/* WHO WE ARE SECTION */}

      <Content id="about" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <Row justify="center">
          <Col xs={24} md={16} style={{ textAlign: 'center' }}>

            {/* Title + Divider */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Title level={2} style={{ marginBottom: 20 }}>
                WHO <span style={{ color: colorPrimary }}>WE ARE ?</span>
              </Title>

              <Divider plain style={{ margin: '30px 0' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
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
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Paragraph
                style={{
                  fontSize: 17,
                  color: antdTheme.token.colorTextSecondary,
                  maxWidth: 900,
                  margin: '0 auto',
                  lineHeight: 1.8,
                }}
              >
                Quench Quest Social Foundation is a non-profit organization dedicated to
                establishing and operating welfare centers, programs, and social
                initiatives for needy children, women, and economically weaker sections
                of society. Our work focuses on promoting social welfare, health
                assistance, education, and guidance in rural, remote, and urban slum
                areas to uplift the educational and economic standards of deprived and
                marginalized communities.
              </Paragraph>

            </motion.div>

          </Col>
        </Row>
      </Content>


      {/* VISION & MISSION */}
      <Content style={{ padding: "100px 20px", background: "#fafafa" }}>
        <Row gutter={[40, 40]} justify="center">
          {visionMission.map((item, index) => (
            <Col xs={24} md={10} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  background: "#fff",
                  padding: 40,
                  borderRadius: antdTheme.token.borderRadius,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    color: colorPrimary,
                    marginBottom: 20,
                  }}
                >
                  {item.icon}
                </div>
                <Title level={3}>{item.title}</Title>
                <Paragraph style={{ fontSize: 16, color: colorTextSecondary }}>
                  {item.desc}
                </Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Content>

      {/* OUR CORE OBJECTIVES SECTION */}
      <Content style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <Row justify="center">
          <Col xs={24} md={18} style={{ textAlign: 'center' }}>

            {/* Title + Divider */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Title level={2} style={{ marginBottom: 20 }}>
                OUR <span style={{ color: antdTheme.token.colorPrimary }}>CORE OBJECTIVES</span>
              </Title>

              <Divider plain style={{ margin: '30px 0' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 14,
                    color: antdTheme.token.colorPrimary,
                    fontSize: 22,
                  }}
                >
                  <span style={{ width: 40, height: 2, background: antdTheme.token.colorPrimary }} />
                  <HeartFilled />
                  <span style={{ width: 40, height: 2, background: antdTheme.token.colorPrimary }} />
                </span>
              </Divider>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paragraph
                style={{
                  fontSize: 17,
                  color: antdTheme.token.colorTextSecondary,
                  maxWidth: 900,
                  margin: '0 auto',
                  lineHeight: 1.8,
                }}
              >
                Quench Quest Social Foundation is committed to uplifting marginalized and
                economically weaker communities across rural, remote, and urban slum areas.
                Our core objectives focus on promoting education, improving health awareness,
                strengthening livelihoods, eliminating social inequalities, and fostering
                community participation to create sustainable and dignified lives.
              </Paragraph>
            </motion.div>

          </Col>
        </Row>
      </Content>


      {/* OUR TEAM SECTION */}
      <Content style={{ padding: "100px 20px", background: "#fafafa" }}>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: "center", marginBottom: 60 }}>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Title level={2}>
                MEET OUR <span style={{ color: antdTheme.token.colorPrimary }}>LEADERSHIP</span>
              </Title>



              <Divider plain style={{ margin: '30px 0' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 14,
                    color: antdTheme.token.colorPrimary,
                    fontSize: 22,
                  }}
                >
                  <span style={{ width: 40, height: 2, background: antdTheme.token.colorPrimary }} />
                  <HeartFilled />
                  <span style={{ width: 40, height: 2, background: antdTheme.token.colorPrimary }} />
                </span>
              </Divider>
              <Paragraph
                style={{
                  fontSize: 16,
                  color: antdTheme.token.colorTextSecondary,
                  maxWidth: 700,
                  margin: "0 auto",
                }}
              >
                Our leadership team brings together passion, experience, and commitment
                to drive meaningful social change and community empowerment.
              </Paragraph>
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[32, 32]} justify="center">
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: "#fff",
                  padding: 30,
                  borderRadius: antdTheme.token.borderRadius,
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  height: "100%",
                }}
              >
                {/* Profile Image */}
                <div
                  style={{
                    width: 100,
                    height: 100,
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <Title level={4} style={{ marginBottom: 4 }}>
                  {member.name}
                </Title>
                <Paragraph
                  style={{
                    color: antdTheme.token.colorPrimary,
                    fontWeight: 500,
                    marginBottom: 12,
                  }}
                >
                  {member.role}
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: 14,
                    color: antdTheme.token.colorTextSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {member.desc}
                </Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Content>


      {/* OUR IMPACT IN NUMBERS SECTION */}

      <Content id="projects" style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: 'center', marginBottom: 60 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* <Title level={2} style={{ fontWeight: 700 }}>
                                    Our Impact in Numbers
                                </Title> */}

              <Title level={2} style={{ marginBottom: 20 }}>
                OUR <span style={{ color: colorPrimary }}>IMPACT IN NUMBERS</span>
              </Title>

              <Divider plain style={{ margin: '30px 0' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    color: antdTheme.token.colorPrimary,
                    fontSize: 22,

                  }}

                >
                  <span style={{ width: 40, height: 2, background: antdTheme.token.colorPrimary }} />
                  <HeartFilled />
                  <span style={{ width: 40, height: 2, background: antdTheme.token.colorPrimary }} />
                </span>
              </Divider>
            </motion.div>
          </Col>
        </Row>

        <Row
          gutter={[32, 32]}
          justify="center"
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {impactStats.map((item, index) => (
            <Col xs={24} sm={8} key={index} style={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Animated Count */}
                <Title
                  level={1}
                  style={{
                    color: antdTheme.token.colorPrimary,
                    fontWeight: 700,
                    fontSize: 'clamp(35px, 6vw, 24px)',
                    marginBottom: 10,
                  }}
                >
                  <CountUp
                    start={0}
                    end={item.count}
                    duration={2.5}
                    separator=","
                  />
                  {item.suffix}
                </Title>

                {/* Label */}
                <Paragraph
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: antdTheme.token.colorText,
                  }}
                >
                  {item.label}
                </Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Content>





      {/* ================= AWARDS & ACHIEVEMENTS ================= */}
      <Content style={{ background: "#e6d3c6", padding: "0" }}>
        <Carousel autoplay dots={true} effect="fade">
          {awards.map((award, index) => (
            <div key={index}>
              <Row
                align="middle"
                style={{
                  minHeight: "520px",
                  padding: "60px 40px",
                }}
              >
                {/* LEFT CONTENT */}
                <Col xs={24} md={12} style={{ paddingLeft: isDesktop ? 64 : 20 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Title
                      level={2}
                      style={{
                        fontWeight: 700,
                        maxWidth: 520,
                      }}
                    >
                      {award.title}
                    </Title>

                    <Paragraph
                      style={{
                        fontSize: 16,
                        lineHeight: 1.8,
                        maxWidth: 520,
                        marginTop: 20,
                      }}
                    >
                      {award.description}
                    </Paragraph>

                    <Paragraph
                      style={{
                        marginTop: 30,
                        fontWeight: 500,
                        cursor: "pointer",
                      }}
                    >
                      {award.linkText}
                    </Paragraph>
                  </motion.div>
                </Col>

                {/* RIGHT IMAGE */}
                <Col xs={24} md={12}>
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Image
                      src={award.image}
                      preview={false}
                      style={{
                        maxHeight: 360,
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </motion.div>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </Content>


      {/* ================= PARTNERS SECTION ================= */}
      <Content style={{ padding: "100px 20px", background: "#ffffffff" }}>
        <Row justify="center">
          <Col xs={24} style={{ textAlign: "center", marginBottom: 50 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Title level={2}>
                OUR <span style={{ color: colorPrimary }}>PARTNERS</span>
              </Title>

              <Divider plain>
                <HeartFilled style={{ color: colorPrimary, fontSize: 22 }} />
              </Divider>

              <Paragraph
                style={{
                  fontSize: 16,
                  color: colorTextSecondary,
                  maxWidth: 700,
                  margin: "0 auto",
                }}
              >
                We proudly collaborate with organizations and institutions
                that share our vision of empowerment, equality, and social
                transformation.
              </Paragraph>
            </motion.div>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={24} md={18}>
            <Carousel
              autoplay
              autoplaySpeed={2000}
              dots={false}
              slidesToShow={4}
              slidesToScroll={1}
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
              ]}
            >
              {partnerLogos.map((logo, index) => (
                <div key={index}>
                  <div
                    style={{
                      height: 120,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 20,
                    }}
                  >
                    <Image
                      src={logo}
                      preview={false}
                      style={{
                        maxHeight: 80,
                        maxWidth: "100%",
                        objectFit: "contain",
                        transition: "0.3s",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Content>

    </Layout>
  );
};

export default About;
