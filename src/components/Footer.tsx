"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const shortLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Products", id: "products" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

const socialIcons = [
  {
    icon: <EmailIcon fontSize="small" />,
    href: "mailto:pravintalekar@npaasengineers.com",
  },
];

const contactInfo = [
  {
    icon: <LocationOnIcon fontSize="small" />,
    text: "B-503, Pruthvi Enclave 2, Opp. Bhor Industries, Borivali (East), Mumbai-400066",
    href: "https://maps.app.goo.gl/xiDmcVMCLSxWnxzo6",
  },
  {
    icon: <PhoneIcon fontSize="small" />,
    text: "+91 9967580544",
    href: "tel:+919967580544",
  },
  {
    icon: <EmailIcon fontSize="small" />,
    text: "pravintalekar@npaasengineers.com",
    href: "mailto:pravintalekar@npaasengineers.com",
  },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#164C68", color: "white", pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mb: 5,
          }}
        >
          {/* Column 1 — Brand */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "var(--font-saira), sans-serif",
                fontWeight: 700,
                color: "white",
                mb: 2,
              }}
            >
              NPAAS{" "}
              <Box component="span" color="secondary.main">
                Engineers
              </Box>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.6)", mb: 3, lineHeight: 1.8 }}
            >
              Authorized Business Associates of Ashida Electronics Pvt Ltd. —
              Supply, Testing & Commissioning of Protection Relays, Control &
              Relay Panels, and Substation Automation Systems.
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

          {/* Column 2 — Quick Links */}
          <Box
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-saira), sans-serif",
                color: "secondary.main",
                mb: 2,
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>
            {shortLinks.map((link) => (
              <Box
                key={link.id}
                component="a"
                href={`#${link.id}`}
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
                <ChevronRightIcon
                  sx={{ fontSize: 18, color: "secondary.main", mr: 0.5 }}
                />
                {link.label}
              </Box>
            ))}
          </Box>

          {/* Column 3 — Contact */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-saira), sans-serif",
                color: "secondary.main",
                mb: 2,
                fontWeight: 600,
              }}
            >
              Contact Us
            </Typography>
            {contactInfo.map((item, i) => (
              <Box
                key={i}
                component="a"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                display="flex"
                alignItems="flex-start"
                gap={1.5}
                mb={2}
                pb={2}
                sx={{
                  borderBottom:
                    i < contactInfo.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                  textDecoration: "none",
                  "&:hover .contact-text": { color: "secondary.main" },
                }}
              >
                <Box sx={{ color: "secondary.main", mt: 0.3, flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <Typography
                  className="contact-text"
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    transition: "color 0.3s",
                  }}
                >
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
            &copy; {new Date().getFullYear()} NPAAS Engineers. All Rights
            Reserved.
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
