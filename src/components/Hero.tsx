"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box sx={{ position: "relative", height: { xs: 400, sm: 500, md: 650 }, overflow: "hidden" }}>
      {/* Background image */}
      <Image
        src="/img/hero.jpg"
        alt="NPAAS Engineers"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontFamily: "var(--font-saira), sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2.8rem", sm: "3.8rem", md: "5rem" },
                lineHeight: 1.1,
                mb: 2,
                letterSpacing: "-0.01em",
              }}
            >
              NPAAS Engineers
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.88)",
                fontFamily: "var(--font-saira), sans-serif",
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                maxWidth: 680,
                lineHeight: 1.6,
                letterSpacing: "0.01em",
              }}
            >
              Numerical Protection and Automation Application Support Engineers
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
