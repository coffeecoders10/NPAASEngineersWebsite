"use client";
import { Box, Container, Link, Typography } from "@mui/material";
import SectionFadeIn from "@/components/SectionFadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import EmailIcon from "@mui/icons-material/Email";

const emails = [
  "npaasengineers@gmail.com",
  "pravintalekar@npaasengineers.com",
];

export default function Inquiries() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundImage: "url('/img/hero.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.55)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <SectionHeader subtitle="Get In Touch" title="Inquiries" light />

        <SectionFadeIn>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="body1" color="rgba(255,255,255,0.8)" textAlign="center" mb={1}>
              Please forward your inqueries to:
            </Typography>

            {emails.map((email) => (
              <Link
                key={email}
                href={`mailto:${email}`}
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "white",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1rem",
                  transition: "all 0.25s",
                  "&:hover": {
                    bgcolor: "secondary.main",
                    borderColor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                <EmailIcon sx={{ color: "inherit" }} />
                {email}
              </Link>
            ))}
          </Box>
        </SectionFadeIn>
      </Container>
    </Box>
  );
}
