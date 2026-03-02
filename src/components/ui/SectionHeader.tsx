"use client";
import { Box, Typography } from "@mui/material";
import SectionFadeIn from "@/components/SectionFadeIn";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  light?: boolean;
}

export default function SectionHeader({ subtitle, title, light = false }: SectionHeaderProps) {
  return (
    <Box textAlign="center" mb={3}>
      <SectionFadeIn>
        <Typography
          variant="h6"
          color="secondary.main"
          fontWeight={600}
          textTransform="uppercase"
          letterSpacing={2}
          mb={1}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h3"
          color={light ? "white" : "text.primary"}
          sx={{ 
            fontFamily: "var(--font-saira), sans-serif",
            fontSize: { xs: "h4.fontSize", md: "h3.fontSize" }
          }}
        >
          {title}
        </Typography>
      </SectionFadeIn>
    </Box>
  );
}
