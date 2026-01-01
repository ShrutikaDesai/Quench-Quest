import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Layout, Typography, Button, Space, Row, Col, Divider } from 'antd';
import { useLocation } from 'react-router-dom';
import { HeartFilled, HeartOutlined, TeamOutlined, BookOutlined, SafetyOutlined, RiseOutlined, ToolOutlined, BulbOutlined } from '@ant-design/icons';
import { motion } from "framer-motion";
import antdTheme from '../../theme/antdTheme';
import heroImage from '../../assets/hero-img1.png';
import CountUp from 'react-countup';
import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.jpg';
import { sendContactMessage } from "../../slices/contactSlice";



const { Content } = Layout;
const { Title, Paragraph } = Typography;

const newsData = [
    {
        image: news1,
        date: 'October 26, 2023',
        title: 'New Education Initiative Launched in Rural Areas',
        desc: 'Our latest program aims to provide digital literacy to 10,000 children in remote villages, bridging the technological gap and fostering future-ready skills.',
    },
    {
        image: news2,
        date: 'September 15, 2023',
        title: 'Health Camps Benefit Thousands in Urban Slums',
        desc: 'Over 5,000 individuals received free medical check-ups and essential medicines through our recent health camps, addressing critical health needs.',
    },
    {
        image: news3,
        date: 'August 01, 2023',
        title: 'Skill Development Program Empowers Women',
        desc: 'Our vocational training initiative has successfully equipped 200 women with sustainable livelihood skills, fostering economic independence.',
    },
];


const Home = () => {
    const { colorPrimary, colorTextSecondary } = antdTheme.token;
    const location = useLocation();
    const dispatch = useDispatch();
     const { loading, success, error } = useSelector((state) => state.contact);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });


    const handleSubmit = (e) => {
           e.preventDefault();
          
        dispatch(sendContactMessage(formData));

    };

//     const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const resultAction = await dispatch(sendContactMessage(formData)).unwrap();

//         // Reset form after successful submission
//         setFormData({ name: "", email: "", subject: "", message: "" });

//         // Display success message
//         message.success(resultAction.message || "Message sent successfully!");
//     } catch (err) {
//         // Display error message
//         message.error(err.message || "Failed to send message");
//     }
// };


    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {

                const headerEl = document.querySelector('header');
                const headerHeight = headerEl ? headerEl.offsetHeight : 70;
                const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight - 12;

                setTimeout(() => window.scrollTo({ top: offsetPosition, behavior: 'smooth' }), 50);
            }
        }
    }, [location]);

    return (
        <Layout>


            {/* HERO SECTION */}
            <Content style={{ padding: '100px 20px', backgroundColor: '#f5f8fc' }}>
                <Row
                    gutter={[50, 30]}
                    justify="center"
                    align="middle"
                    style={{ maxWidth: 1200, margin: '0 auto' }}
                >
                    {/* LEFT CONTENT */}
                    <Col xs={24} md={12}>
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Title level={2} style={{ lineHeight: 1.2 }}>
                                <span style={{ fontWeight: 'bold', fontSize: 'clamp(32px, 5vw, 48px)' }}>
                                    Empowering Lives.
                                </span>
                                <br />
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 'clamp(24px, 3vw, 32px)',
                                        color: colorTextSecondary,
                                    }}
                                >
                                    Building Stronger Communities.
                                </span>
                            </Title>

                            <Paragraph style={{ fontSize: 16, color: colorTextSecondary }}>
                                We are a social welfare organization dedicated to uplifting underprivileged children,
                                women, and economically weaker sections of society.
                            </Paragraph>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <Space
                                    size="large"
                                    onClick={() => {
                                        const section = document.getElementById('contact');
                                        section?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    style={{ marginTop: 20 }}>
                                    <Button type="primary" size="large">
                                        Donate Now
                                    </Button>
                                    <Button
                                        size="large"
                                        onClick={() => {
                                            const section = document.getElementById('contact');
                                            section?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Volunteer With Us
                                    </Button>
                                </Space>
                            </motion.div>
                        </motion.div>
                    </Col>

                    {/* RIGHT IMAGE */}
                    <Col xs={24} md={12}>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src={heroImage}
                                alt="Empowering kids"
                                style={{
                                    width: '100%',
                                    borderRadius: 12,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                }}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Content>


            {/* WHO WE ARE SECTION */}

            <Content style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
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
                                    fontSize: 18,
                                    color: colorTextSecondary,
                                    maxWidth: 700,
                                    margin: '0 auto',
                                    lineHeight: 1.7,
                                }}
                            >
                                “Quench Quest Social Foundation is dedicated to empowering marginalized
                                communities through education, health awareness, and grassroots-driven action”
                            </Paragraph>
                        </motion.div>

                    </Col>
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


            {/* OUR FEATURED PROGRAMS SECTION */}

            <Content style={{ padding: '100px 20px', backgroundColor: '#fafafa' }}>
                <Row justify="center">
                    <Col xs={24} style={{ textAlign: 'center', marginBottom: 60 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <Title level={2} style={{ marginBottom: 20 }}>
                                OUR <span style={{ color: colorPrimary }}>FEATURED PROGRAMS</span>
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
                    {[
                        {
                            title: 'Education & Child Welfare',
                            desc: 'Providing quality education, fostering safe environments, and ensuring holistic development for children from underprivileged backgrounds.',
                            icon: <BookOutlined />,
                        },
                        {
                            title: 'Health Assistance & Awareness',
                            desc: 'Delivering essential medical aid, promoting health education, and improving access to healthcare for women and vulnerable communities.',
                            icon: <HeartOutlined />,
                        },
                        {
                            title: 'Livelihood & Skill Training',
                            desc: 'Empowering adults and youth with vocational skills, entrepreneurship training, and resources for sustainable livelihoods.',
                            icon: <ToolOutlined />,
                        },
                        {
                            title: 'Anti-Child Labour & Advocacy',
                            desc: 'Working to eradicate child labor, raise awareness about harmful practices, and advocate for children’s rights and protection.',
                            icon: <BulbOutlined />,
                        },
                    ].map((program, index) => (
                        <Col xs={24} sm={12} lg={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.7, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <div
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: antdTheme.token.borderRadius,
                                        padding: '32px 24px',
                                        height: '100%',
                                        minHeight: 325,
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: '50%',
                                            background: `${antdTheme.token.colorPrimary}15`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 22,
                                            color: antdTheme.token.colorPrimary,
                                            marginBottom: 20,
                                        }}
                                    >
                                        {program.icon}
                                    </div>

                                    {/* Title */}
                                    <Title level={4} style={{ marginBottom: 12 }}>
                                        {program.title}
                                    </Title>

                                    {/* Description */}
                                    <Paragraph style={{ color: antdTheme.token.colorTextSecondary }}>
                                        {program.desc}
                                    </Paragraph>

                                    {/* Learn More */}
                                    {/* <Button
                                        type="link"
                                        style={{
                                            padding: 0,
                                            fontWeight: 500,
                                            color: antdTheme.token.colorPrimary,
                                        }}
                                    >
                                        Learn More →
                                    </Button> */}
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Content>



            {/* OUR IMPACT IN NUMBERS SECTION */}

            <Content style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
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
                    {[
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
                    ].map((item, index) => (
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



            {/* BECOME VOLUNTEER CTA SECTION */}
            <Content
                style={{
                    background: antdTheme.token.colorPrimary,
                    padding: '80px 20px',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <Row justify="center">
                        <Col xs={24} md={18} style={{ textAlign: 'center' }}>

                            {/* Title */}
                            <Title
                                level={2}
                                style={{
                                    color: '#ffffff',
                                    fontWeight: 700,
                                    marginBottom: 16,
                                }}
                            >
                                BECOME A VOLUNTEER
                            </Title>

                            {/* Subtitle */}
                            <Paragraph
                                style={{
                                    color: '#ffffff',
                                    fontSize: 18,
                                    maxWidth: 700,
                                    margin: '0 auto 40px',
                                    lineHeight: 1.7,
                                }}
                            >
                                With an approach of giving back to society, our volunteers are helping
                                us from across the world.
                            </Paragraph>

                            {/* Button with hover animation */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                style={{ display: 'inline-block' }}
                            >
                                <Button
                                    size="large"
                                    onClick={() => {
                                        const section = document.getElementById('contact');
                                        section?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    style={{
                                        background: '#ffffff',
                                        color: antdTheme.token.colorPrimary,
                                        fontWeight: 600,
                                        borderRadius: 50,
                                        padding: '10px 40px',
                                        height: 'auto',
                                    }}
                                >
                                    Join as Volunteer
                                </Button>
                            </motion.div>

                        </Col>
                    </Row>
                </motion.div>
            </Content>




            {/* LATEST NEWS & UPDATES SECTION */}

            <Content style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
                <Row justify="center">
                    <Col xs={24} style={{ textAlign: 'center', marginBottom: 60 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            {/* <Title level={2} style={{ fontWeight: 700 }}>
                                    Latest News & Updates
                                </Title> */}

                            <Title level={2} style={{ marginBottom: 20 }}>
                                LATEST <span style={{ color: colorPrimary }}>NEWS & UPDATES</span>
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
                    {newsData.map((news, index) => (
                        <Col xs={24} md={8} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.7, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <div
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: antdTheme.token.borderRadius,
                                        overflow: 'hidden',
                                        height: '100%',
                                        minHeight: 550,
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    {/* Image */}
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        style={{
                                            width: '100%',
                                            height: 220,
                                            objectFit: 'cover',
                                        }}
                                    />

                                    {/* Content */}
                                    <div style={{ padding: 24, flexGrow: 1 }}>
                                        <Paragraph
                                            style={{
                                                color: antdTheme.token.colorTextSecondary,
                                                fontSize: 14,
                                                marginBottom: 8,
                                            }}
                                        >
                                            {news.date}
                                        </Paragraph>

                                        <Title level={4} style={{ marginBottom: 12 }}>
                                            {news.title}
                                        </Title>

                                        <Paragraph style={{ color: antdTheme.token.colorTextSecondary }}>
                                            {news.desc}
                                        </Paragraph>
                                    </div>

                                    {/* Button */}
                                    <div style={{ padding: '0 24px 24px' }}>
                                        <Button
                                            block
                                            size="large"
                                            onClick={() => {
                                                const section = document.getElementById('contact');
                                                section?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            style={{
                                                borderRadius: antdTheme.token.borderRadius,
                                                fontWeight: 600,
                                            }}
                                        >
                                            Connect With Us
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Content>


            {/* GET IN TOUCH SECTION */}
            <Content style={{ padding: '100px 20px', backgroundColor: '#f5f8fc' }}>
                <Row justify="center">
                    <Col xs={24} md={16} style={{ textAlign: 'center', marginBottom: 40 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <Title level={2}>
                                GET IN <span style={{ color: colorPrimary }}>TOUCH</span>
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

                            <Paragraph style={{ fontSize: 17, color: colorTextSecondary, maxWidth: 700, margin: '0 auto', lineHeight: 1.7 }}>
                                Have any questions, suggestions, or want to collaborate with us? Fill out the form below and we’ll get back to you as soon as possible.
                            </Paragraph>
                        </motion.div>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col xs={24} md={12}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <form
                                style={{
                                    background: '#ffffff',
                                    borderRadius: antdTheme.token.borderRadius,
                                    padding: '32px 24px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                }}
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: antdTheme.token.borderRadius,
                                        border: `1px solid #d9d9d9`,
                                        fontSize: 16,
                                    }}
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: antdTheme.token.borderRadius,
                                        border: `1px solid #d9d9d9`,
                                        fontSize: 16,
                                    }}
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: antdTheme.token.borderRadius,
                                        border: `1px solid #d9d9d9`,
                                        fontSize: 16,
                                    }}
                                />

                                <textarea
                                    placeholder="Your Message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: antdTheme.token.borderRadius,
                                        border: `1px solid #d9d9d9`,
                                        fontSize: 16,
                                        resize: 'none',
                                    }}
                                />

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    style={{
                                        padding: '12px 24px',
                                        borderRadius: antdTheme.token.borderRadius,
                                        fontWeight: 600,
                                    }}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                    </Col>
                </Row>
            </Content>


        </Layout>
    );
};

export default Home;
