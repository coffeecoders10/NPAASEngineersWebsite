"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import SectionFadeIn from "@/components/SectionFadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const products = [
  { src: "/img/project-1.jpg", title: "Web Design", category: "Design" },
  { src: "/img/project-2.jpg", title: "Cyber Security", category: "Security" },
  { src: "/img/project-3.jpg", title: "Mobile App Info", category: "Development" },
  { src: "/img/project-4.jpg", title: "Web Development", category: "Development" },
  { src: "/img/project-5.jpg", title: "Digital Marketing", category: "Marketing" },
  { src: "/img/project-6.jpg", title: "Keyword Research", category: "SEO" },
];

const ProductItem = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  overflow: "hidden",
  cursor: "pointer",

  // Hover overlay
  "& .product-content": {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.5s",
    background: "rgba(24, 66, 182, 0.85)",
    zIndex: 2,
    padding: 24,
  },

  "&:hover .product-content": {
    opacity: 1,
  },

  // Corner decorations (before/after on .product-img)
  "& .product-img::before": {
    content: '""',
    position: "absolute",
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    background: theme.palette.secondary.main,
    borderRadius: "0 0 10px 0",
    zIndex: 1,
    transition: "opacity 0.5s",
  },

  "& .product-img::after": {
    content: '""',
    position: "absolute",
    width: 100,
    height: 100,
    bottom: 0,
    right: 0,
    background: theme.palette.primary.main,
    borderRadius: "10px 0 0 0",
    zIndex: 1,
    transition: "opacity 0.5s",
  },

  "&:hover .product-img::before, &:hover .product-img::after": {
    opacity: 0,
  },

  // Image scale on hover
  "& img": {
    transition: "transform 0.5s ease !important",
  },

  "&:hover img": {
    transform: "scale(1.05)",
  },
}));

export default function Products() {
  return (
    <Box id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8F8F9" }}>
      <Container maxWidth="lg">
        <SectionHeader subtitle="Our Products" title="Our Amazing Products" />

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          }}
        >
          {products.map((product, idx) => (
            <SectionFadeIn key={product.title} delay={idx * 0.1}>
              <ProductItem>
                {/* Image wrapper with corner ::before/::after */}
                <Box
                  className="product-img"
                  sx={{ position: "relative", height: 250, overflow: "hidden" }}
                >
                  <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Hover overlay content */}
                <Box className="product-content">
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontFamily: "var(--font-saira), sans-serif",
                      fontWeight: 600,
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "secondary.main", mb: 2, textTransform: "uppercase", letterSpacing: 1 }}
                  >
                    {product.category}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ color: "white", borderColor: "white", "&:hover": { bgcolor: "secondary.main", borderColor: "secondary.main" } }}
                  >
                    View Product
                  </Button>
                </Box>
              </ProductItem>
            </SectionFadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
