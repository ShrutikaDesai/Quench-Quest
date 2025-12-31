import React, { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Card, Button, Tag, ConfigProvider, Divider } from "antd";
import {
    BookOutlined,
    HeartOutlined,
    ToolOutlined,
    SafetyOutlined,
    HeartFilled,
} from "@ant-design/icons";
import { Carousel } from "antd";

import story1 from "../../assets/story1.png";
import story2 from "../../assets/story2.png";
import story3 from "../../assets/story3.png";

import antdTheme from "../../theme/antdTheme";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const programsData = [
    {
        title: "Education & Child Welfare",
        icon: <BookOutlined />,
        description:
            "Providing access to quality education, ensuring child protection, and fostering holistic development for children from underprivileged backgrounds.",
        activities: [
            "Running informal education and learning support centers",
            "Distribution of school supplies and uniforms",
            "Child protection awareness workshops",
            "Nutritional support programs",
        ],
        beneficiaries: ["Children", "SC", "ST", "Urban Slum Families"],
    },
    {
        title: "Women & Maternal Health",
        icon: <HeartOutlined />,
        description:
            "Improving health outcomes for women and mothers through awareness, healthcare access, and reproductive health support.",
        activities: [
            "Health camps and regular medical check-ups",
            "Maternal care and nutrition counseling",
            "Hygiene and sanitation awareness",
            "Distribution of sanitary products",
        ],
        beneficiaries: ["Women", "Expectant Mothers", "Rural Communities"],
    },
    {
        title: "Livelihood & Skill Training",
        icon: <ToolOutlined />,
        description:
            "Empowering economically weaker sections with vocational skills and livelihood opportunities to achieve financial independence.",
        activities: [
            "Vocational and skill development training",
            "Entrepreneurship guidance programs",
            "Job placement assistance",
            "Financial literacy workshops",
        ],
        beneficiaries: ["Adults", "Unemployed Youth", "EWS", "OBCs"],
    },
    {
        title: "Anti-Child Labour & Awareness",
        icon: <SafetyOutlined />,
        description:
            "Working towards eradicating child labour and promoting awareness about children’s rights and social justice.",
        activities: [
            "Rescue and rehabilitation of child laborers",
            "Community awareness drives",
            "Advocacy for child rights",
            "Human rights education workshops",
        ],
        beneficiaries: ["Children", "Parents", "Community Leaders"],
    },
];

const storiesData = [
    {
        title: "From Child Labour To Classroom Dreams",
        description:
            "Rescued from child labour, Raju was enrolled in our bridge education program. Today, he is back in school, dreaming of becoming a teacher and uplifting others like him.",
        image: story2,
    },
    {
        title: "Revathi’s Journey From A Small Village To Working For India’s Largest IT Company",
        description:
            "Coming from a rural background, Revathi overcame challenges through our education and skill development initiatives. Today, she works at a leading IT company, inspiring many young girls to pursue their dreams.",
        image: story1,
    },
    {
        title: "Empowering Women Through Skills & Confidence",
        description:
            "Through our livelihood training programs, Meena gained vocational skills and financial independence, transforming her family’s future.",
        image: story3,
    },
];


const Programs = () => {
    const { colorPrimary, colorTextSecondary } = antdTheme.token;
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 576px)").matches;

    // Animation state + helpers
    const [visibleSections, setVisibleSections] = useState({});

    const sectionBaseStyle = {
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 600ms cubic-bezier(.2,.9,.2,1), transform 600ms cubic-bezier(.2,.9,.2,1)",
    };

    const sectionVisibleStyle = {
        opacity: 1,
        transform: "translateY(0)",
    };

    const getSectionStyle = (id, extra = {}) => ({
        ...extra,
        ...sectionBaseStyle,
        ...(visibleSections[id] ? sectionVisibleStyle : {}),
    });

    // Per-card animation helper (direction cycles: up, left, right) with staggered delay
    const getCardStyle = (id, idx) => {
        const directions = ["up", "left", "right"];
        const dir = directions[idx % directions.length];
        const base = {
            opacity: 0,
            transform: dir === "up" ? "translateY(24px)" : dir === "left" ? "translateX(-24px)" : "translateX(24px)",
            transition: "opacity 600ms cubic-bezier(.2,.9,.2,1), transform 600ms cubic-bezier(.2,.9,.2,1)",
            transitionDelay: `${idx * 120}ms`,
        };
        const visible = {
            opacity: 1,
            transform: "translateX(0) translateY(0)",
        };
        return {
            ...base,
            ...(visibleSections[id] ? visible : {}),
        };
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("data-section");
                        if (id) setVisibleSections((s) => ({ ...s, [id]: true }));
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <ConfigProvider theme={antdTheme}>
            <Layout>
                <Content style={{ padding: "100px 20px", background: "#ffffff" }}>

                    {/* Header */}
                    <Row data-section="programs-header" justify="center" style={getSectionStyle("programs-header", {})}>
                        <Col xs={24} md={14} style={{ textAlign: "center" }}>
                            <Title level={2}>
                                Our <span style={{ color: colorPrimary }}>Programs</span>
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
                            <Paragraph
                                style={{
                                    fontSize: 16,
                                    color: colorTextSecondary,
                                    maxWidth: 750,
                                    margin: "0 auto 60px",
                                    lineHeight: 1.7,
                                }}
                            >
                                At Quench Quest Social Foundation, our programs are designed to
                                create sustainable impact for children, women, and economically
                                weaker communities through education, healthcare, skills, and
                                advocacy.
                            </Paragraph>
                        </Col>
                    </Row>

                    {/* Cards Container */}
                    <Row
                        data-section="program-cards"
                        gutter={[40, 40]}
                        justify="center"
                        style={getSectionStyle("program-cards", { maxWidth: 1600, margin: "0 auto" })}
                    >
                        {programsData.map((program, index) => (
                            <Col xs={24} sm={24} md={12} lg={10} key={index}>
                                <Card
                                    hoverable
                                    style={{
                                        height: "100%",
                                        borderRadius: antdTheme.token.borderRadius,
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                        maxWidth: 900,           // 👈 DECREASE CARD WIDTH
                                        margin: "0 auto",        // 👈 SLIGHT LEFT SHIFT
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        style={{
                                            fontSize: 32,
                                            color: colorPrimary,
                                            marginBottom: 16,
                                        }}
                                    >
                                        {program.icon}
                                    </div>

                                    {/* Title */}
                                    <Title level={4}>{program.title}</Title>

                                    {/* Description */}
                                    <Paragraph style={{ color: colorTextSecondary }}>
                                        {program.description}
                                    </Paragraph>

                                    {/* Activities */}
                                    <Paragraph style={{ fontWeight: 600, marginBottom: 8 }}>
                                        Key Activities:
                                    </Paragraph>
                                    <ul style={{ paddingLeft: 18, color: colorTextSecondary }}>
                                        {program.activities.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                    {/* Beneficiaries */}
                                    <Paragraph style={{ fontWeight: 600, marginTop: 12 }}>
                                        Target Beneficiaries:
                                    </Paragraph>
                                    <div style={{ marginBottom: 20 }}>
                                        {program.beneficiaries.map((tag, idx) => (
                                            <Tag key={idx} style={{ marginBottom: 6 }}>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Button type="primary" block>
                                        Learn More / Support
                                    </Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Content>


                {/* STORIES OF CHANGE SECTION */}
                <Content >
                    <Row data-section="stories" justify="center" style={getSectionStyle("stories", { marginTop: 120 })}>
                        <Col xs={24} md={20}>

                            {/* Section Header */}
                            <div style={{ textAlign: "center", marginBottom: 60 }}>
                                <Title level={2}>
                                    Stories Of <span style={{ color: colorPrimary }}>Change</span>
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
                            </div>

                            {/* Slider */}
                            <Carousel autoplay dots style={{ padding: "20px" }}>
                                {storiesData.map((story, index) => (
                                    <div key={index}>
                                        <Card
                                            style={{
                                                borderRadius: 16,
                                                overflow: "hidden",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",

                                            }}
                                        >
                                            <Row gutter={0} align="middle">

                                                {/* Text Content */}
                                                <Col
                                                    xs={24}
                                                    md={12}
                                                    style={{
                                                        padding: isMobile ? "24px" : "50px",
                                                        background: colorPrimary,
                                                        color: "#ffffff",
                                                        minHeight: isMobile ? 220 : 380,
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <Title level={4} style={{ color: "#ffffff" }}>
                                                        {story.title}
                                                    </Title>

                                                    <Paragraph
                                                        style={{
                                                            color: "rgba(255,255,255,0.9)",
                                                            fontSize: 16,
                                                            lineHeight: 1.7,
                                                        }}
                                                    >
                                                        {story.description}
                                                    </Paragraph>

                                                    <Button
                                                        style={{
                                                            marginTop: 20,
                                                            background: "#ffffff",
                                                            color: colorPrimary,
                                                            borderRadius: 30,
                                                            fontWeight: 600,
                                                            width: "fit-content",
                                                        }}
                                                    >
                                                        Know More
                                                    </Button>
                                                </Col>

                                                {/* Image */}
                                                <Col xs={24} md={12}>
                                                    <img
                                                        src={story.image}
                                                        alt={story.title}
                                                        style={{
                                                            width: "100%",
                                                            height: isMobile ? 220 : "100%",
                                                            objectFit: "cover",
                                                            minHeight: isMobile ? 220 : 380,
                                                            display: "block",
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                        </Card>
                                    </div>
                                ))}
                            </Carousel>

                        </Col>
                    </Row>
                </Content>


                {/* DONATE NOW SECTION */}
                <Content data-section="donate" style={getSectionStyle("donate", { padding: "80px 20px", background: "#f5f5f5", marginTop: 80 })}>
                    <Row justify="center">
                        <Col xs={24} md={14} style={{ textAlign: "center" }}>
                            <Title level={2}>
                                Support Our <span style={{ color: colorPrimary }}>Mission</span>
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

                            <Paragraph
                                style={{
                                    fontSize: 16,
                                    color: colorTextSecondary,
                                    maxWidth: 750,
                                    margin: "0 auto 40px",
                                    lineHeight: 1.7,
                                }}
                            >
                                Your donation helps us provide education, healthcare, livelihood opportunities,
                                and support to underprivileged children, women, and families. Join us in making a lasting impact.
                            </Paragraph>

                            <Button
                                type="primary"
                                size="large"
                                style={{
                                    borderRadius: 30,
                                    padding: "10px 40px",
                                    fontWeight: 600,
                                    background: colorPrimary,
                                    color: "#ffffff",
                                }}
                                onClick={() => {
                                    // You can replace this with your actual donation link
                                    window.open("https://www.yourdonationlink.com", "_blank");
                                }}
                            >
                                Donate Now
                            </Button>
                        </Col>
                    </Row>
                </Content>


            </Layout>
        </ConfigProvider>
    );
};

export default Programs;
