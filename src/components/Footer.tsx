"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ClockIcon from "@mui/icons-material/AccessTime";

const shortLinks = ["About Us", "Contact Us", "Our Services", "Our Projects", "Our Team", "Latest Blog"];
const helpLinks = ["Free Quotes", "Tech Support", "Open Agency", "Agency Career", "Our Portfolio", "Latest News"];

const socialIcons = [
  { icon: <FacebookIcon fontSize="small" />, href: "#" },
  { icon: <TwitterIcon fontSize="small" />, href: "#" },
  { icon: <LinkedInIcon fontSize="small" />, href: "#" },
  { icon: <InstagramIcon fontSize="small" />, href: "#" },
];

const contactInfo = [
  { icon: <LocationOnIcon fontSize="small" />, text: "123 Tech Street, Digital City, CA 90210" },
  { icon: <PhoneIcon fontSize="small" />, text: "+1 (555) 000-0000" },
  { icon: <EmailIcon fontSize="small" />, text: "info@hightech-it.com" },
  { icon: <ClockIcon fontSize="small" />, text: "Mon - Fri, 8:00 - 21:00" },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#164C68", color: "white", pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 4,
            mb: 5,
          }}
        >
          {/* Column 1 — Brand */}
          <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
            <Typography
              variant="h4"
              sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 700, color: "white", mb: 2 }}
            >
              NPAAS <Box component="span" color="secondary.main">Engineers</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mb: 3, lineHeight: 1.8 }}>
              Innovative IT solutions for modern businesses. We help you grow, scale, and secure your digital presence.
            </Typography>
            <Box display="flex" gap={1}>
              {socialIcons.map((s, i) => (
                <Box
                  key={i}
                  component="a"
                  href={s.href}
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    transition: "all 0.5s",
                    "&:hover": { bgcolor: "secondary.main" },
                  }}
                >
                  {s.icon}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Column 2 — Short Link */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontFamily: "var(--font-saira), sans-serif", color: "secondary.main", mb: 2, fontWeight: 600 }}
            >
              Short Link
            </Typography>
            {shortLinks.map((link) => (
              <Box
                key={link}
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgba(255,255,255,0.7)",
                  mb: 1.5,
                  fontSize: "0.9rem",
                  transition: "all 0.3s",
                  "&:hover": { color: "secondary.main", pl: 0.5 },
                }}
              >
                <ChevronRightIcon sx={{ fontSize: 18, color: "secondary.main", mr: 0.5 }} />
                {link}
              </Box>
            ))}
          </Box>

          {/* Column 3 — Help Link */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontFamily: "var(--font-saira), sans-serif", color: "secondary.main", mb: 2, fontWeight: 600 }}
            >
              Help Links
            </Typography>
            {helpLinks.map((link) => (
              <Box
                key={link}
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgba(255,255,255,0.7)",
                  mb: 1.5,
                  fontSize: "0.9rem",
                  transition: "all 0.3s",
                  "&:hover": { color: "secondary.main", pl: 0.5 },
                }}
              >
                <ChevronRightIcon sx={{ fontSize: 18, color: "secondary.main", mr: 0.5 }} />
                {link}
              </Box>
            ))}
          </Box>

          {/* Column 4 — Contact */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontFamily: "var(--font-saira), sans-serif", color: "secondary.main", mb: 2, fontWeight: 600 }}
            >
              Contact Us
            </Typography>
            {contactInfo.map((item, i) => (
              <Box
                key={i}
                display="flex"
                alignItems="flex-start"
                gap={1.5}
                mb={2}
                pb={2}
                sx={{
                  borderBottom: i < contactInfo.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <Box sx={{ color: "secondary.main", mt: 0.3, flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            &copy; {new Date().getFullYear()} NPAAS Engineers. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            Designed by{" "}
            <Box component="span" color="secondary.main">
              NPAAS Engineers
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
