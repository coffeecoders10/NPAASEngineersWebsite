"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import SectionFadeIn from "@/components/SectionFadeIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const highlights = [
  "Authorized Business Associates of Ashida Electronics Pvt Ltd.",
  "Supply, Testing & Commissioning of Protection Relays",
  "Control & Relay Panels and Substation Automation Systems",
];

export default function AboutUs() {
  return (
    <Box id="about" sx={{ py: 6, bgcolor: "background.default" }}>
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
              variant="h4"
              color="text.primary"
              sx={{ fontFamily: "var(--font-saira), sans-serif", mb: 3, lineHeight: 1.2, fontWeight: 800 }}
            >
              Trusted Vendors for Ashida Electronics Automation Products
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3} sx={{ lineHeight: 1.8 }}>
              NPAAS Engineers are authorized Business Associates of Ashida Electronics Pvt Ltd., engaged in the Supply, Testing, and Commissioning of their automation product range — comprising Protection Relays, Control &amp; Relay Panels, and Substation Automation Systems (SAS). The firm serves as a dedicated vendor, managing the complete sales cycle for utilities, industrial establishments, and infrastructure projects that require dependable power protection solutions.
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
              href="YOUR_CERTIFICATE_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 3, px: 4, py: 1.5 }}
            >
              View Dealership Certificate
            </Button>
          </SectionFadeIn>
        </Box>
      </Container>
    </Box>
  );
}
