"use client";
import { Box, Button, Container, TextField, Typography, Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SectionHeader from "@components/ui/SectionHeader";
import SectionFadeIn from "@components/SectionFadeIn";

const contactDetails = [
  {
    icon: <LocationOnIcon />,
    title: "Our Office",
    text: "123 Tech Street, Digital City, CA 90210",
  },
  {
    icon: <PhoneIcon />,
    title: "Call Us",
    text: "+1 (555) 000-0000",
  },
  {
    icon: <EmailIcon />,
    title: "Email Us",
    text: "info@hightech-it.com",
  },
];

export default function Contact() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeader subtitle="Contact Us" title="Contact For Any Query" />

        {/* Contact detail cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            mb: 6,
          }}
        >
          {contactDetails.map((detail, i) => (
            <SectionFadeIn key={detail.title} delay={i * 0.15}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  bgcolor: "background.paper",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0 0 30px rgba(0,0,0,0.08)",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "secondary.main",
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                  }}
                >
                  {detail.icon}
                </Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    color="primary.main"
                    sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 600, mb: 0.5 }}
                  >
                    {detail.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {detail.text}
                  </Typography>
                </Box>
              </Box>
            </SectionFadeIn>
          ))}
        </Box>

        {/* Map + Form */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Map */}
          <SectionFadeIn delay={0.1}>
            <Box
              sx={{
                bgcolor: "secondary.main",
                borderRadius: 2,
                overflow: "hidden",
                height: { xs: 300, md: "100%" },
                minHeight: 300,
              }}
            >
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.98784!3d40.74844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zNDnCsDE0JzU0LjQiTiA3M8KwNTknMTYuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                sx={{ width: "100%", height: "100%", border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </SectionFadeIn>

          {/* Contact Form */}
          <SectionFadeIn delay={0.2}>
            <Box
              sx={{
                bgcolor: "secondary.main",
                p: { xs: 3, md: 5 },
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                placeholder="Your Name"
                variant="outlined"
                size="small"
                sx={{ bgcolor: "background.paper", borderRadius: 1 }}
              />
              <TextField
                fullWidth
                placeholder="Your Email"
                type="email"
                variant="outlined"
                size="small"
                sx={{ bgcolor: "background.paper", borderRadius: 1 }}
              />
              <TextField
                fullWidth
                placeholder="Project Type"
                variant="outlined"
                size="small"
                sx={{ bgcolor: "background.paper", borderRadius: 1 }}
              />
              <TextField
                fullWidth
                placeholder="Your Message"
                multiline
                rows={5}
                variant="outlined"
                sx={{ bgcolor: "background.paper", borderRadius: 1 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ color: "white", py: 1.5, alignSelf: "flex-start", px: 5 }}
              >
                Send Message
              </Button>
            </Box>
          </SectionFadeIn>
        </Box>
      </Container>
    </Box>
  );
}
