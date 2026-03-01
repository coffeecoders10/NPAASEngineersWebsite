// components/sections/AboutUs.tsx
"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SectionFadeIn from "@components/SectionFadeIn";

export default function AboutUs() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionFadeIn>
          <Typography variant="h3" sx={{ mb: 2 }}>
            About Us
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Write a concise story about your company: what you build, who it’s
              for, and what makes you different. Keep it skimmable and focused
              on outcomes.
            </Typography>
          </Paper>
        </SectionFadeIn>
      </Container>
    </Box>
  );
}