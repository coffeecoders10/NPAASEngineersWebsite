// app/page.tsx
import Box from "@mui/material/Box";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/sections/Stats";
import AboutUs from "@/components/sections/AboutUs";
import ServicesOffered from "@/components/sections/ServicesOffered";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Page() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <LoadingSpinner />
      {/* <Topbar /> */}
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ServicesOffered />
        <Stats />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </Box>
  );
}
