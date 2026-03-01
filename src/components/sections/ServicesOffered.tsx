// components/sections/ServicesOffered.tsx
"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SectionFadeIn from "../SectionFadeIn";

const services = [
  {
    title: "Service One",
    desc: "Describe the outcome, not the feature. Keep it short and specific.",
  },
  {
    title: "Service Two",
    desc: "Highlight what you deliver and why it matters to customers.",
  },
  {
    title: "Service Three",
    desc: "Add a concrete benefit: speed, quality, cost, or reliability.",
  },
];

export default function ServicesOffered() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionFadeIn>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Services Offered
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            What you do best, packaged clearly.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 2.5,
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            {services.map((s, idx) => (
              <SectionFadeIn key={s.title} delay={idx * 0.06}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3.25,
                    height: "100%",
                    borderRadius: 4,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {s.desc}
                  </Typography>
                </Paper>
              </SectionFadeIn>
            ))}
          </Box>
        </SectionFadeIn>
      </Container>
    </Box>
  );
}