"use client";
import { Box, Container, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialLinks = [
  { icon: <FacebookIcon fontSize="small" />, href: "#" },
  { icon: <TwitterIcon fontSize="small" />, href: "#" },
  { icon: <LinkedInIcon fontSize="small" />, href: "#" },
  { icon: <InstagramIcon fontSize="small" />, href: "#" },
];

export default function Topbar() {
  return (
    <Box
      bgcolor="#164C68"
      sx={{ display: { xs: "none", md: "block" }, py: 1 }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="nowrap"
          gap={2}
        >
          {/* Left: contact info */}
          <Box display="flex" alignItems="center" gap={3} flexShrink={0}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <LocationOnIcon sx={{ color: "secondary.main", fontSize: 16 }} />
              <Typography variant="body2" color="white" noWrap>
                123 Tech Street, Digital City
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <PhoneIcon sx={{ color: "secondary.main", fontSize: 16 }} />
              <Typography variant="body2" color="white" noWrap>
                +1 (555) 000-0000
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <EmailIcon sx={{ color: "secondary.main", fontSize: 16 }} />
              <Typography variant="body2" color="white" noWrap>
                info@npaasengineers.com
              </Typography>
            </Box>
          </Box>

          {/* Center: scrolling ticker */}
          <Box
            flex={1}
            overflow="hidden"
            mx={3}
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <Typography
              variant="body2"
              color="white"
              sx={{
                display: "inline-block",
                whiteSpace: "nowrap",
                animation: "ticker-scroll 12s linear infinite",
              }}
            >
              ⚡ NPAAS Engineers &nbsp;&nbsp;|&nbsp;&nbsp; Numerical Protection &nbsp;&nbsp;|&nbsp;&nbsp; Automation Application &nbsp;&nbsp;|&nbsp;&nbsp; Support Engineers &nbsp;&nbsp;|&nbsp;&nbsp; Protection &amp; Automation Solutions
            </Typography>
          </Box>

          {/* Right: social icons */}
          <Box display="flex" alignItems="center" gap={0.5} flexShrink={0}>
            {socialLinks.map((s, i) => (
              <Box
                key={i}
                component="a"
                href={s.href}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  bgcolor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                  transition: "all 0.5s",
                  "&:hover": {
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                {s.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
