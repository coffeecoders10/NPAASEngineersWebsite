"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import SectionFadeIn from "@components/SectionFadeIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const highlights = [
  "Professional & Expert Team",
  "Better Features & Reliability",
  "24/7 Customer Support",
];

export default function AboutUs() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Image stack */}
          <SectionFadeIn delay={0.1}>
            <Box sx={{ position: "relative", height: { xs: 320, md: 480 } }}>
              {/* Back image (bottom right) */}
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "20%",
                  width: "80%",
                  height: "80%",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <Image
                  src="/img/about-2.jpg"
                  alt="About Us 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              {/* Front image (top left) */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "75%",
                  height: "75%",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 6,
                  border: "6px solid white",
                }}
              >
                <Image
                  src="/img/about-1.jpg"
                  alt="About Us 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </SectionFadeIn>

          {/* Text content */}
          <SectionFadeIn delay={0.25}>
            <Typography
              variant="h6"
              color="secondary.main"
              fontWeight={600}
              textTransform="uppercase"
              letterSpacing={2}
              mb={1}
            >
              About Us
            </Typography>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontFamily: "var(--font-saira), sans-serif", mb: 3, lineHeight: 1.2 }}
            >
              We Are The Best IT Solutions Agency
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2} sx={{ lineHeight: 1.8 }}>
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo magna dolore erat amet.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.8 }}>
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo magna dolore erat amet.
            </Typography>

            {highlights.map((item) => (
              <Box key={item} display="flex" alignItems="center" gap={1.5} mb={1.5}>
                <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 22 }} />
                <Typography variant="body1" color="text.primary" fontWeight={500}>
                  {item}
                </Typography>
              </Box>
            ))}

            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3, color: "white", px: 5, py: 1.5 }}
            >
              More Details
            </Button>
          </SectionFadeIn>
        </Box>
      </Container>
    </Box>
  );
}
