"use client";
import { Box, Typography } from "@mui/material";
import SectionFadeIn from "@/components/SectionFadeIn";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  light?: boolean;
  titleVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function SectionHeader({ subtitle, title, light = false, titleVariant = "h3" }: SectionHeaderProps) {
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
          variant={titleVariant}
          color={light ? "white" : "text.primary"}
          sx={{ fontFamily: "var(--font-saira), sans-serif" }}
        >
          {title}
        </Typography>
      </SectionFadeIn>
    </Box>
  );
}
