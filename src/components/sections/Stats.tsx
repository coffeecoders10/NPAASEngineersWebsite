"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SectionFadeIn from "@/components/SectionFadeIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupsIcon from "@mui/icons-material/Groups";

const facts = [
  { value: 89, suffix: "", label: "Clients", Icon: PeopleAltIcon },
  { value: 38, suffix: "", label: "Products", Icon: InventoryIcon },
  { value: 7, suffix: "", label: "Members", Icon: GroupsIcon },
];

function AnimatedCounter({ target, suffix, Icon }: { target: number; suffix: string; Icon: React.ElementType }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, target]);

  return (
    <Box ref={ref} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
      <Icon sx={{ color: "primary.dark", fontSize: { xs: "2rem", md: "2.5rem" } }} />
      <Typography
        variant="h2"
        sx={{
          color: "primary.dark",
          fontFamily: "var(--font-saira), sans-serif",
          fontWeight: 700,
          fontSize: { xs: "2.5rem", md: "3rem" },
          lineHeight: 1,
        }}
      >
        {count}{suffix}
      </Typography>
    </Box>
  );
}

export default function Stats() {
  return (
    <Box sx={{ bgcolor: "secondary.main", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {facts.map((fact, i) => (
            <SectionFadeIn key={i} delay={i * 0.15}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <AnimatedCounter target={fact.value} suffix={fact.suffix} Icon={fact.Icon} />
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: 500, lineHeight: 1.4 }}
                >
                  {fact.label}
                </Typography>
              </Box>
            </SectionFadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
