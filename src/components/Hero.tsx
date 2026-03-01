// components/Hero.tsx
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Hero({
  title = "Your Company Name",
  subtitle = "A short, clear value proposition that explains what you do.",
}: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 520, md: 640 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/img/hero.jpg"
          alt="Hero background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(11,18,32,0.70) 0%, rgba(11,18,32,0.55) 45%, rgba(11,18,32,0.78) 100%)",
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2.25} sx={{ maxWidth: 820 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={56}
              height={56}
              style={{ borderRadius: 14 }}
            />
            <Typography
              variant="overline"
              sx={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.18em" }}
            >
              WELCOME
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              color: "common.white",
              fontWeight: 900,
              lineHeight: 1.05,
              fontSize: { xs: 40, sm: 54, md: 64 },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontWeight: 500,
              maxWidth: 680,
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}