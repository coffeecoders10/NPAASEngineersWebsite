"use client";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import BrushIcon from "@mui/icons-material/Brush";
import SecurityIcon from "@mui/icons-material/Security";
import CampaignIcon from "@mui/icons-material/Campaign";
import LaptopIcon from "@mui/icons-material/Laptop";
import SectionFadeIn from "@/components/SectionFadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Web Design",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Web Development",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <BrushIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "UI/UX Design",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Web Security",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <CampaignIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Digital Marketing",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: <LaptopIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Programming",
    desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

// Using emotion styled() to handle parent:hover triggering child ::after pseudo-element
const ServiceCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  boxShadow: "0 0 45px rgba(0,0,0,0.1)",
  padding: "30px",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.5s",
  cursor: "pointer",

  "& .services-content": {
    position: "relative",
    zIndex: 0,
  },

  "& .services-content::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: 0,
    top: 0,
    left: 0,
    borderRadius: 10,
    background: "rgba(24, 66, 182, 0.92)",
    transition: "height 0.5s ease",
    zIndex: 1,
  },

  "&:hover .services-content::after": {
    height: "100%",
  },

  "& .services-icon": {
    position: "relative",
    zIndex: 2,
    transition: "all 0.5s",
  },

  "&:hover .services-icon .MuiSvgIcon-root": {
    color: `${theme.palette.secondary.main} !important`,
  },

  "& .services-title": {
    position: "relative",
    zIndex: 2,
    transition: "color 0.5s",
  },

  "&:hover .services-title": {
    color: "#ffffff",
  },

  "& .services-desc": {
    position: "relative",
    zIndex: 2,
    transition: "color 0.5s",
  },

  "&:hover .services-desc": {
    color: "rgba(255,255,255,0.85)",
  },
}));

export default function ServicesOffered() {
  return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeader subtitle="Our Services" title="Services We Offer" />

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          }}
        >
          {services.map((service, idx) => (
            <SectionFadeIn key={service.title} delay={idx * 0.1}>
              <ServiceCard>
                <Box className="services-content">
                  <Box className="services-icon" mb={2}>
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    className="services-title"
                    sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 600, mb: 1.5, color: "text.primary" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="services-desc" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    {service.desc}
                  </Typography>
                </Box>
              </ServiceCard>
            </SectionFadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
