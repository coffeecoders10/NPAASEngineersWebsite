// components/sections/ProductNumbers.tsx
"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SectionFadeIn from "../SectionFadeIn";

const stats = [
  { label: "Users", value: "10K+" },
  { label: "Projects", value: "250+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Countries", value: "30+" },
];

export default function ProductNumbers() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionFadeIn>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Product Numbers
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            A quick snapshot of traction and reliability.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 2.5,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            {stats.map((s, idx) => (
              <SectionFadeIn key={s.label} delay={idx * 0.05}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 4,
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5 }}>
                    {s.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {s.label}
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