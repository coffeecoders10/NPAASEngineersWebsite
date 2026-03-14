"use client";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import FactoryIcon from "@mui/icons-material/Factory";
import SectionFadeIn from "@/components/SectionFadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: <ElectricBoltIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Protection Relays",
    desc: "Supply, testing, and commissioning of Ashida Electronics protection relays for reliable fault detection and power system safety in utilities and industrial setups.",
  },
  {
    icon: <DashboardCustomizeIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Control & Relay Panels",
    desc: "Design, supply, and commissioning of Control & Relay Panels tailored for substations, ensuring precise control and protection of electrical systems.",
  },
  {
    icon: <FactoryIcon sx={{ fontSize: 48, color: "primary.main", transition: "color 0.5s" }} />,
    title: "Substation Automation",
    desc: "End-to-end deployment of Substation Automation Systems (SAS) for modern grid infrastructure, enabling intelligent monitoring, control, and remote management.",
  },
];

const ServiceCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  boxShadow: "0 0 45px rgba(0,0,0,0.1)",
  padding: "30px",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.5s",
  cursor: "pointer",

  // Overlay covers the entire card via ::after on the card itself
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: 0,
    top: 0,
    left: 0,
    borderRadius: 10,
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    transition: "height 0.5s ease",
    zIndex: 1,
  },

  "&:hover::after": {
    height: "100%",
  },

  "& .services-icon": {
    position: "relative",
    zIndex: 2,
    transition: "all 0.5s",
  },

  "&:hover .services-icon .MuiSvgIcon-root": {
    color: `${theme.palette.primary.contrastText} !important`,
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
    <Box id="services" sx={{ py: 5, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeader subtitle="Our Services" title="Services We Offer" />

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            alignItems: "stretch",
          }}
        >
          {services.map((service, idx) => (
            <SectionFadeIn key={service.title} delay={idx * 0.1} sx={{ height: "100%" }}>
              <ServiceCard sx={{ height: "100%" }}>
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
              </ServiceCard>
            </SectionFadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
