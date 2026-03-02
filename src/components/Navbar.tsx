"use client";
import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Products", id: "products" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          zIndex: 1100,
          transition: "background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s",
          bgcolor: scrolled ? "rgba(22, 76, 104, 0.55)" : "primary.main",
          backdropFilter: scrolled ? "blur(16px) saturate(1.6)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.6)" : "none",
          boxShadow: scrolled ? "0 2px 24px 0 rgba(0,0,0,0.18)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.12)" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 0.5 }}>
            {/* Brand */}
            <Typography
              variant="h5"
              sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 700, color: "white", flexShrink: 0 }}
            >
              NPAAS ENGINEERS
            </Typography>

            {/* Spacer */}
            <Box sx={{ flex: 1 }} />

            {/* Desktop nav links - right aligned */}
            <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    "&:hover": { color: "secondary.main" },
                    transition: "color 0.3s",
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Mobile hamburger */}
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <IconButton onClick={() => setMobileOpen(true)} sx={{ color: "white" }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: "#164C68" } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h5" sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 700, color: "white" }}>
            NPAAS <Box component="span" color="secondary.main">Engineers</Box>
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItemButton key={link.id} onClick={() => scrollToSection(link.id)} sx={{ color: "white" }}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
