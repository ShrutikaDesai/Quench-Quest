import React, { useState, useEffect, useRef } from "react";
import { Layout, Typography, Row, Col, Divider } from "antd";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchAboutIntro , updateAboutIntroData} from "../../slices/aboutSlice";
import { fetchAboutWho, updateAboutWhoData } from "../../slices/aboutWhoSlice";
import { fetchMissionVision, updateMissionVisionData } from "../../slices/missionVisionSlice";
import { fetchCoreObjectives, updateCoreObjectiveData } from "../../slices/coreObjectivesSlice";
import { fetchLeadership, updateLeadershipData } from "../../slices/leadershipSlice";
import { fetchImpact, updateImpactData } from "../../slices/impactSlice";
import { fetchAwards, updateAwardData } from "../../slices/awardsSlice";
import { fetchPartners, updatePartnersData } from "../../slices/partnersSlice";


const { Content } = Layout;
const { Title, Paragraph } = Typography;
const partnerLogos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
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



// const awards = [
//   {
//     title: "‘iTrain on Wheels’ Wins Strategic CSR Project of the Year 2025",
//     description:
//       "At the 3rd Bharat CSR & Sustainability Summit, Quench Quest Social Foundation was recognized for its flagship initiative ‘iTrain on Wheels’, empowering thousands with skill-based education and entrepreneurial training across India.",
//     image: award1,
//     linkText: "View all →",
//   },
//   {
//     title: "Excellence in Community Development Award",
//     description:
//       "Honored for outstanding contribution towards education, healthcare, and livelihood programs benefiting underserved communities nationwide.",
//     image: award2,
//     linkText: "View all →",
//   },
//   {
//     title: "Best NGO for Social Impact",
//     description:
//       "Awarded for sustained impact, transparency, and innovation in social welfare initiatives focused on women and children.",
//     image: award3,
//     linkText: "View all →",
//   },
// ];






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

  // choose icon based on item type/title
  const getIcon = (item) => {
		const t = (item?.type || item?.title || "").toLowerCase();
		// larger icon and vertical spacing (icon above the title)
		const iconStyle = { color: colorPrimary, fontSize: 36, marginBottom: 12 };
		if (t.includes("vision")) return <RiseOutlined style={iconStyle} />;
		if (t.includes("mission")) return <HeartFilled style={iconStyle} />;
		return null;
	};
	
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

  // Fetch About intro (hero) from backend
  const dispatch = useDispatch();
  const { intro, loading, error, updated } = useSelector((state) => state.about);
  // About -> Who We Are slice
  const { aboutWho, loading: whoLoading, error: whoError, updated: whoUpdated } = useSelector((state) => state.aboutWho);

  useEffect(() => {
    if (!intro && !loading) {
      dispatch(fetchAboutIntro());
    }
  }, [dispatch, intro, loading]);

  // Fetch the About -> Who We Are content
  useEffect(() => {
    if (!aboutWho && !whoLoading) {
      dispatch(fetchAboutWho());
    }
  }, [dispatch, aboutWho, whoLoading]);

  // Fetch Mission & Vision content
  const { item: missionVisionItem, loading: mvLoading, error: mvError, updated: mvUpdated } = useSelector((state) => state.missionVision);

  useEffect(() => {
    if (!missionVisionItem && !mvLoading) {
      dispatch(fetchMissionVision());
    }
  }, [dispatch, missionVisionItem, mvLoading]);

  // Call PUT automatically once after mission-vision is loaded
  useEffect(() => {
    if (missionVisionItem?.id && !mvUpdated) {
      const fd = new FormData();
      const isValid = (v) => v !== undefined && v !== null && v !== "" && v !== "null" && v !== "undefined";

      // If API returns array-like, skip auto-PUT (manual updates preferred). If single object, include known fields
      if (!Array.isArray(missionVisionItem)) {
        if (isValid(missionVisionItem.title)) fd.append("title", missionVisionItem.title);
        if (isValid(missionVisionItem.section)) fd.append("section", missionVisionItem.section);
        if (isValid(missionVisionItem.type)) fd.append("type", missionVisionItem.type);
        if (isValid(missionVisionItem.vision)) fd.append("vision", missionVisionItem.vision);
        if (isValid(missionVisionItem.mission)) fd.append("mission", missionVisionItem.mission);
        if (isValid(missionVisionItem.description)) fd.append("description", missionVisionItem.description);
      }

      const hasAny = fd.has("title") || fd.has("section") || fd.has("type") || fd.has("vision") || fd.has("mission") || fd.has("description");
      if (hasAny) {
        console.debug("Dispatching updateMissionVisionData", { id: missionVisionItem.id, payload: Array.from(fd.entries()) });
        dispatch(updateMissionVisionData({ id: missionVisionItem.id, data: fd }));
      }
    }
  }, [missionVisionItem, mvUpdated, dispatch]);

  // Call PUT automatically once after intro is loaded (to mirror other sections)
  useEffect(() => {
    if (intro?.id && !updated) {
      const introFormData = new FormData();
      // Append only the fields that are present and non-empty
      const isValid = (v) => v !== undefined && v !== null && v !== "" && v !== "null" && v !== "undefined";

      if (isValid(intro.title)) introFormData.append("title", intro.section);
      if (isValid(intro.description)) introFormData.append("description", intro.description);


   

      // Only dispatch if there are keys appended
      // FormData doesn't expose size easily; check if any of the known fields existed
      const hasAnyField = introFormData.has("title") ||  introFormData.has("description") ;
      if (hasAnyField) {
        console.debug("Dispatching updateAboutIntroData", { id: intro.id, data: introFormData });
        dispatch(updateAboutIntroData({ id: intro.id, data: introFormData }));
      }
    }
  }, [intro, updated, dispatch]);

  // Call PUT automatically once after 'Who We Are' is loaded
  useEffect(() => {
    if (aboutWho?.id && !whoUpdated) {
      const fd = new FormData();
      const isValid = (v) => v !== undefined && v !== null && v !== "" && v !== "null" && v !== "undefined";

      if (isValid(aboutWho.section)) fd.append("type", aboutWho.section);
      if (isValid(aboutWho.description)) fd.append("description", aboutWho.description);

      const hasAny = fd.has("type") || fd.has("description");
      if (hasAny) {
        console.debug("Dispatching updateAboutWhoData", { id: aboutWho.id, preview: { section: aboutWho.section } });
        dispatch(updateAboutWhoData({ id: aboutWho.id, data: fd }));
      }
    }
  }, [aboutWho, whoUpdated, dispatch]);

  // Fetch Core Objectives from backend (guard against reducer not being registered)
  const { items: coreItems, loading: coreLoading, error: coreError, updated: coreUpdated } =
    useSelector((state) => state.coreObjectives ?? { items: null, loading: false, error: null, updated: false });

  // Fetch Leadership from backend (guard if reducer not registered)
  const { items: leaders, loading: leadersLoading, error: leadersError, updated: leadersUpdated } =
    useSelector((state) => state.leadership ?? { items: null, loading: false, error: null, updated: false });
  const leadersUpdatedRef = useRef(new Set());

  const coreUpdatedRef = useRef(new Set());
  useEffect(() => {
    if (!coreItems && !coreLoading) {
      dispatch(fetchCoreObjectives());
    }
  }, [dispatch, coreItems, coreLoading]);

  useEffect(() => {
    if (!leaders && !leadersLoading) {
      dispatch(fetchLeadership());
    }
  }, [dispatch, leaders, leadersLoading]);

  // Auto-PUT each core objective once (only send fields that exist)
  useEffect(() => {
    if (!coreItems || coreLoading) return;
    const list = Array.isArray(coreItems) ? coreItems : (coreItems.results || [coreItems]);
    const isValid = (v) => v !== undefined && v !== null && v !== "" && v !== "null" && v !== "undefined";

    list.forEach((item) => {
      const id = item?.id ?? item?.pk;
      if (!id || coreUpdatedRef.current.has(id)) return;
      const fd = new FormData();
      if (isValid(item.title)) fd.append("title", item.title);
      if (isValid(item.section)) fd.append("section", item.section);
      if (isValid(item.type)) fd.append("type", item.type);
      if (isValid(item.description)) fd.append("description", item.description);

      const hasAny = fd.has("title") || fd.has("section") || fd.has("type") || fd.has("description");
      if (hasAny) {
        coreUpdatedRef.current.add(id);
        console.debug("Dispatching updateCoreObjectiveData", { id, payload: Array.from(fd.entries()) });
        dispatch(updateCoreObjectiveData({ id, data: fd }));
      }
    });
  }, [coreItems, coreLoading, dispatch]);

  // Auto-PUT each leadership member once (only send fields that exist)
  useEffect(() => {
    if (!leaders || leadersLoading) return;
    const list = Array.isArray(leaders) ? leaders : (leaders.results || [leaders]);
    const isValid = (v) => v !== undefined && v !== null && v !== "" && v !== "null" && v !== "undefined";
    list.forEach((mem) => {
      const id = mem?.id ?? mem?.pk;
      if (!id || leadersUpdatedRef.current.has(id)) return;
      const fd = new FormData();
      if (isValid(mem.name)) fd.append("name", mem.name);
      if (isValid(mem.role)) fd.append("role", mem.role);
      if (isValid(mem.description)) fd.append("description", mem.description);
      if (isValid(mem.image)) fd.append("image", mem.image);
      const hasAny = fd.has("name") || fd.has("role") || fd.has("description") || fd.has("image");
      if (hasAny) {
        leadersUpdatedRef.current.add(id);
        console.debug("Dispatching updateLeadershipData", { id, payload: Array.from(fd.entries()) });
        dispatch(updateLeadershipData({ id, data: fd }));
      }
    });
  }, [leaders, leadersLoading, dispatch]);

  // Resolve hero content using backend values for text only; always keep local hero background image
  const heroImage = heroBg; // always use the original local background (do NOT use backend image)
  const mainTitle = intro?.section || intro?.heading || "";
  const subTitle = intro?.subtitle || intro?.sub_title || "";
  const heroParagraph = intro?.description || "";

  // Leadership section heading & paragraph sourced from backend if available
  const leadershipSectionTitle =
    (leaders && !Array.isArray(leaders) && leaders.section) ||
    (Array.isArray(leaders) && leaders.find((l) => l.section)?.section) ||
    "MEET OUR LEADERSHIP";

  const leadershipSectionDesc =
    (leaders && !Array.isArray(leaders) && leaders.description) ||
    (Array.isArray(leaders) && leaders.find((l) => l.description)?.description) ||
    "Our leadership team brings together passion, experience, and commitment to drive meaningful social change and community empowerment.";

  // Build hero style only when we have a background image from backend
  const heroStyle = {
    padding: "100px 20px",
    ...(heroImage
      ? {
          backgroundImage: `linear-gradient(rgba(24, 24, 25, 0.85), rgba(63, 64, 66, 0.85)), url(${heroImage})`,
        }
      : {}),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflow: 'hidden',
  }; 




const {
  impactList,
  loading: impactLoading,
  updated: impactUpdated,
} = useSelector((state) => state.impact);


useEffect(() => {
  if (impactList.length === 0 && !impactLoading) {
    dispatch(fetchImpact());
  }
}, [dispatch, impactList.length, impactLoading]);



const {
  items: awards,
  loading: awardsLoading,
  updated: awardsUpdated,
} = useSelector((state) => state.awards);

useEffect(() => {
  if (awards.length === 0 && !awardsLoading) {
    dispatch(fetchAwards());
  }
}, [dispatch, awards.length, awardsLoading]);


// Inside About component
const { items: partners, loading: partnersLoading, updated: partnersUpdated } = useSelector(
  (state) => state.partners
);


// Fetch partners on mount
useEffect(() => {
  if (partners.length === 0 && !partnersLoading) {
    dispatch(fetchPartners());
  }
}, [dispatch, partners.length, partnersLoading]);

const partnerData = partners.length > 0 ? partners[0] : null;
const partnerImages = partnerData
  ? [
      partnerData.image1,
      partnerData.image2,
      partnerData.image3,
      partnerData.image4,
      partnerData.image5,
      partnerData.image6,
    ].filter(Boolean) 
  : [];

  return (
    <Layout>

      {/* HERO SECTION */}
      {intro ? (
        <Content style={heroStyle}>
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
                    <span style={{ color: antdTheme.token.colorBgHeader }}>{mainTitle}</span> <span style={{ color: colorPrimary }}>{subTitle}</span>
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
                    {heroParagraph}
                  </Paragraph>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Content>
      ) : null}


      {/* WHO WE ARE SECTION (render ONLY from backend) */}
      {aboutWho ? (
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
                  {aboutWho.section}
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

              {/* Description (backend only) */}
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
                  {whoLoading && !aboutWho ? 'Loading...' : aboutWho.description}
                </Paragraph>

              </motion.div>

            </Col>
          </Row>
        </Content>
      ) : whoLoading ? (
        // show a lightweight placeholder while loading
        <Content id="about" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
          <Row justify="center">
            <Col xs={24} md={16} style={{ textAlign: 'center' }}>
              <Paragraph style={{ fontSize: 17, color: antdTheme.token.colorTextSecondary }}>Loading...</Paragraph>
            </Col>
          </Row>
        </Content>
      ) : null}


      {/* VISION & MISSION */}
   
      {missionVisionItem ? (
        <Content style={{ padding: "100px 20px", background: "#fafafa" }}>
          <Row gutter={[40, 40]} justify="center">
            {Array.isArray(missionVisionItem) ? (
              missionVisionItem.map((it, index) => {
                const title = it.title || it.section || it.name || `Section ${index + 1}`;
                const desc = it.description || it.desc || it.content || it.body || "";
                const Icon = getIcon(it);
                return (
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
                      {/* left-align icon/title/paragraph */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                        {Icon}
                        <Title level={3} style={{ margin: 0, textAlign: 'left' }}>{title}</Title>
                      </div>
                       <Paragraph style={{ fontSize: 16, color: colorTextSecondary }}>{desc}</Paragraph>
                     </motion.div>
                   </Col>
                 );
               })
             ) : missionVisionItem.vision && missionVisionItem.mission ? (
               // API returned an object with 'vision' and 'mission'
               <>
                 <Col xs={24} md={10}>
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0 }}
                     viewport={{ once: true }}
                     style={{
                       background: "#fff",
                       padding: 40,
                       borderRadius: antdTheme.token.borderRadius,
                       boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                     }}
                   >
                    {/* left-align vision block */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                      <RiseOutlined style={{ color: colorPrimary, fontSize: 36 }} />
                      {/* <Title level={3} style={{ margin: 0, textAlign: 'left' }}>OUR VISION</Title> */}
                    </div>
                     <Paragraph style={{ fontSize: 16, color: colorTextSecondary }}>{missionVisionItem.vision}</Paragraph>
                   </motion.div>
                 </Col>
 
                 <Col xs={24} md={10}>
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     viewport={{ once: true }}
                     style={{
                       background: "#fff",
                       padding: 40,
                       borderRadius: antdTheme.token.borderRadius,
                       boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                     }}
                   >
                    {/* left-align mission block */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                      <HeartFilled style={{ color: colorPrimary, fontSize: 36 }} />
                      {/* <Title level={3} style={{ margin: 0, textAlign: 'left' }}>OUR MISSION</Title> */}
                    </div>
                     <Paragraph style={{ fontSize: 16, color: colorTextSecondary }}>{missionVisionItem.mission}</Paragraph>
                   </motion.div>
                 </Col>
               </>
             ) : (
               // Single object with title/description
               (() => {
                 const title = missionVisionItem.title || missionVisionItem.section || "OUR VISION";
                 const desc = missionVisionItem.description || missionVisionItem.content || missionVisionItem.desc || "";
                 const SingleIcon = getIcon(missionVisionItem);
                 return (
                   <Col xs={24} md={20} key="single">
                     <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0 }}
                       viewport={{ once: true }}
                       style={{
                         background: "#fff",
                         padding: 40,
                         borderRadius: antdTheme.token.borderRadius,
                         boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                       }}
                     >
                      {/* left-align single fallback */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                        {SingleIcon}
                        <Title level={3} style={{ margin: 0, textAlign: 'left' }}>{title}</Title>
                      </div>
                       <Paragraph style={{ fontSize: 16, color: colorTextSecondary }}>{desc}</Paragraph>
                     </motion.div>
                   </Col>
                 );
               })()
             )}
          </Row>
        </Content>
      ) : mvLoading ? (
        <Content style={{ padding: "100px 20px", background: "#fafafa" }}>
          <Row justify="center">
            <Col xs={24} md={8} style={{ textAlign: 'center' }}>
              <Paragraph style={{ fontSize: 16, color: colorTextSecondary }}>Loading...</Paragraph>
            </Col>
          </Row>
        </Content>
      ) : null }

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

            {/* Render Core Objectives from backend (fallback to static text) */}
            {coreLoading && !coreItems ? (
              <Paragraph style={{ fontSize: 17, color: antdTheme.token.colorTextSecondary }}>Loading...</Paragraph>
            ) : Array.isArray(coreItems) && coreItems.length > 0 ? (
              <Row gutter={[24, 24]} justify="center" style={{ marginTop: 20 }}>
                {coreItems.map((c) => (
                  <Col xs={24} sm={12} md={8} key={c.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      style={{
                        background: "#fff",
                        padding: 20,
                        borderRadius: antdTheme.token.borderRadius,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                        height: "100%",
                        textAlign: "left",
                      }}
                    >
                      <Title level={4} style={{ marginBottom: 8 }}>{c.title || c.section}</Title>
                      <Paragraph style={{ color: antdTheme.token.colorTextSecondary }}>{c.description}</Paragraph>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            ) : (
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
            )}
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
                {leadershipSectionTitle.includes("LEADERSHIP") ? (
                  <>{leadershipSectionTitle}</>
                ) : (
                  <>MEET OUR <span style={{ color: antdTheme.token.colorPrimary }}>{leadershipSectionTitle}</span></>
                )}
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
                {leadershipSectionDesc}
              </Paragraph>
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[32, 32]} justify="center">
          {(Array.isArray(leaders) && leaders.length > 0 ? leaders : teamMembers).map((member, index) => {
            // support different backend field names
            const name = member.name ?? member.full_name ?? member.title;
            const role = member.role ?? member.position;
            const desc = member.description ?? member.desc;
            const img = member.image ?? member.img;
            return (
              <Col xs={24} sm={12} md={8} key={member.id ?? index}>
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
                  <div style={{ width: 100, height: 100, margin: "0 auto 20px", borderRadius: "50%", overflow: "hidden" }}>
                    {img ? <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                  </div>

                  <Title level={4} style={{ marginBottom: 4 }}>{name}</Title>
                  <Paragraph style={{ color: antdTheme.token.colorPrimary, fontWeight: 500, marginBottom: 12 }}>{role}</Paragraph>
                  <Paragraph style={{ fontSize: 14, color: antdTheme.token.colorTextSecondary, lineHeight: 1.6 }}>{desc}</Paragraph>
                </motion.div>
              </Col>
            );
          })}
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
          {impactList.map((item, index) => (

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
  end={Number(String(item.value).replace(/[^\d]/g, ""))}
  duration={2.5}
  separator=","
/>
+


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
        {partnerData ? partnerData.section : "OUR PARTNERS"}
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
        {partnerData
          ? partnerData.description
          : ""}
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
      {partnersLoading
        ? Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} style={{ height: 120, background: "#f0f0f0" }} />
          ))
        : partnerImages.map((img, index) => (
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
                  src={img}
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
