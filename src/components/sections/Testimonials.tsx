"use client";
import { Box, Container, Divider, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Client Name 1",
    role: "Profession",
    img: "/img/testimonial-1.jpg",
    text: "Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo erat amet Professionalism.",
    rating: 5,
  },
  {
    name: "Client Name 2",
    role: "Profession",
    img: "/img/testimonial-2.jpg",
    text: "Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo erat amet Professionalism.",
    rating: 5,
  },
  {
    name: "Client Name 3",
    role: "Profession",
    img: "/img/testimonial-3.jpg",
    text: "Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo erat amet Professionalism.",
    rating: 5,
  },
  {
    name: "Client Name 4",
    role: "Profession",
    img: "/img/testimonial-4.jpg",
    text: "Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo erat amet Professionalism.",
    rating: 5,
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
  tablet:  { breakpoint: { max: 992,  min: 640  }, items: 2 },
  mobile:  { breakpoint: { max: 640,  min: 0    }, items: 1 },
};

function CustomDot({ onClick, active }: { onClick?: () => void; active?: boolean }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: active ? 30 : 15,
        height: 15,
        borderRadius: "15px",
        mx: "4px",
        bgcolor: active ? "primary.main" : "#c1dad0",
        transition: "width 0.5s, background-color 0.5s",
        cursor: "pointer",
        display: "inline-block",
      }}
    />
  );
}

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8F8F9" }}>
      <Container maxWidth="lg">
        <SectionHeader subtitle="Testimonials" title="What Our Clients Say!" />

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          arrows={false}
          showDots
          customDot={<CustomDot />}
          ssr
          containerClass="pb-12"
        >
          {testimonials.map((t) => (
            <Box
              key={t.name}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 2,
                p: 3,
                mx: 1.5,
                mb: 4,
                boxShadow: "0 0 30px rgba(0,0,0,0.08)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              {/* Header row */}
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                    border: "3px solid",
                    borderColor: "secondary.main",
                  }}
                >
                  <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 600, color: "text.primary" }}
                  >
                    {t.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t.role}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Rating value={t.rating} readOnly size="small" sx={{ mb: 1.5, color: "secondary.main" }} />

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {t.text}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
