// app/page.tsx
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/sections/AboutUs";
import ProductNumbers from "../components/sections/ProductNumbers";
import ServicesOffered from "../components/sections/ServicesOffered";

export default function Page() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navbar />
      <main>
        <Hero
          title="Your Company Name"
          subtitle="A short, clear value proposition that explains what you do."
        />
        <AboutUs />
        <ProductNumbers />
        <ServicesOffered />
      </main>
    </Box>
  );
}