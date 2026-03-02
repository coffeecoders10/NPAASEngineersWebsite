"use client";
import { Box, Container, Typography, Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionFadeIn from "@/components/SectionFadeIn";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 4, bgcolor: "background.default", pb: 10 }}>
      <Container maxWidth="lg">
        <SectionHeader subtitle="Contact Us" title="Contact For Any Query" />

        {/* Address - full width */}
        <SectionFadeIn delay={0}>
          <Box
            component="a"
            href="https://maps.app.goo.gl/xiDmcVMCLSxWnxzo6"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: "0 0 30px rgba(0,0,0,0.08)",
              border: "1px solid",
              borderColor: "divider",
              mb: 3,
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": { boxShadow: "0 0 40px rgba(0,0,0,0.15)" },
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}>
              <LocationOnIcon />
            </Avatar>
            <Box>
              <Typography
                variant="h6"
                color="primary.main"
                sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 600, mb: 0.5 }}
              >
                Our Address
              </Typography>
              <Typography variant="body2" color="text.secondary">
                B-503, Pruthvi Enclave 2, Opp. Bhor Industries, Borivali (East), Mumbai-400066
              </Typography>
            </Box>
          </Box>
        </SectionFadeIn>

        {/* Email + Phone - 50/50 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          <SectionFadeIn delay={0.15}>
            <Box
              component="a"
              href="mailto:pravintalekar@npaasengineers.com"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                bgcolor: "background.paper",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 0 30px rgba(0,0,0,0.08)",
                border: "1px solid",
                borderColor: "divider",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { boxShadow: "0 0 40px rgba(0,0,0,0.15)" },
              }}
            >
              <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}>
                <EmailIcon />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  color="primary.main"
                  sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 600, mb: 0.5 }}
                >
                  Email Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  pravintalekar@npaasengineers.com
                </Typography>
              </Box>
            </Box>
          </SectionFadeIn>

          <SectionFadeIn delay={0.3}>
            <Box
              component="a"
              href="tel:+919967580544"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                bgcolor: "background.paper",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 0 30px rgba(0,0,0,0.08)",
                border: "1px solid",
                borderColor: "divider",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { boxShadow: "0 0 40px rgba(0,0,0,0.15)" },
              }}
            >
              <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}>
                <PhoneIcon />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  color="primary.main"
                  sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 600, mb: 0.5 }}
                >
                  Call Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +91 9967580544
                </Typography>
              </Box>
            </Box>
          </SectionFadeIn>
        </Box>
      </Container>
    </Box>
  );
}
