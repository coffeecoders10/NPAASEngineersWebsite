"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import SectionFadeIn from "@components/SectionFadeIn";

const facts = [
  { value: 99, suffix: "%", label: "Success in getting happy customers" },
  { value: 25, suffix: "K", label: "Thousands of successful business" },
  { value: 120, suffix: "", label: "Total clients who love HighTech" },
  { value: 5, suffix: "", label: "Stars reviews given by satisfied clients" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
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
    <Typography
      ref={ref}
      variant="h2"
      sx={{
        color: "primary.main",
        fontFamily: "var(--font-saira), sans-serif",
        fontWeight: 700,
        fontSize: { xs: "2.5rem", md: "3rem" },
        lineHeight: 1,
        mb: 1,
      }}
    >
      {count}{suffix}
    </Typography>
  );
}

export default function Stats() {
  return (
    <Box sx={{ bgcolor: "secondary.main", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 4,
          }}
        >
          {facts.map((fact, i) => (
            <SectionFadeIn key={i} delay={i * 0.15}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <AnimatedCounter target={fact.value} suffix={fact.suffix} />
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
