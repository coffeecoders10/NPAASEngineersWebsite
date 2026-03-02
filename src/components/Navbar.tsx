"use client";
import { useState } from "react";
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
  Popper,
  Paper,
  Toolbar,
  Typography,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = ["Home", "About", "Services", "Projects", "Team", "Testimonials", "Contact"];
const pageLinks = ["About Us", "Our Team", "Services", "Projects", "Testimonials", "Contact Us", "404 Page"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesAnchor, setPagesAnchor] = useState<HTMLElement | null>(null);
  const [mobilePages, setMobilePages] = useState(false);

  const handlePagesEnter = (e: React.MouseEvent<HTMLElement>) => setPagesAnchor(e.currentTarget);
  const handlePagesLeave = () => setTimeout(() => setPagesAnchor(null), 150);

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "primary.main", zIndex: 1100 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 0.5 }}>
            {/* Brand */}
            <Typography
              variant="h4"
              sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 700, color: "white", mr: 4, flexShrink: 0 }}
            >
              NPAAS <Box component="span" color="secondary.main">Engineers</Box>
            </Typography>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", flex: 1, gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  href="#"
                  sx={{ color: "white", fontWeight: 500, fontSize: "0.95rem", "&:hover": { color: "secondary.main" }, transition: "color 0.3s" }}
                >
                  {link}
                </Button>
              ))}

              {/* Pages dropdown */}
              <Box onMouseEnter={handlePagesEnter} onMouseLeave={handlePagesLeave} sx={{ position: "relative" }}>
                <Button
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{ color: "white", fontWeight: 500, fontSize: "0.95rem", "&:hover": { color: "secondary.main" }, transition: "color 0.3s" }}
                >
                  Pages
                </Button>
                <Popper open={Boolean(pagesAnchor)} anchorEl={pagesAnchor} placement="bottom-start" sx={{ zIndex: 1200 }}>
                  <AnimatePresence>
                    {Boolean(pagesAnchor) && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Paper elevation={4} sx={{ mt: 1, minWidth: 180, borderRadius: 1, overflow: "hidden" }}>
                          {pageLinks.map((p) => (
                            <Box
                              key={p}
                              component="a"
                              href="#"
                              sx={{
                                display: "block", px: 2, py: 1, color: "text.primary", fontSize: "0.9rem",
                                transition: "all 0.3s", "&:hover": { color: "primary.main", pl: 3, bgcolor: "#f5f5f5" },
                              }}
                            >
                              {p}
                            </Box>
                          ))}
                        </Paper>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Popper>
              </Box>
            </Box>

            {/* Mobile hamburger */}
            <Box sx={{ display: { xs: "flex", lg: "none" }, ml: "auto" }}>
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
            <ListItemButton key={link} href="#" sx={{ color: "white" }}>
              <ListItemText primary={link} />
            </ListItemButton>
          ))}
          <ListItemButton onClick={() => setMobilePages(!mobilePages)} sx={{ color: "white" }}>
            <ListItemText primary="Pages" />
            <KeyboardArrowDownIcon sx={{ transform: mobilePages ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", color: "secondary.main" }} />
          </ListItemButton>
          <Collapse in={mobilePages}>
            <List disablePadding>
              {pageLinks.map((p) => (
                <ListItemButton key={p} href="#" sx={{ pl: 4, color: "secondary.main" }}>
                  <ListItemText primary={p} primaryTypographyProps={{ fontSize: "0.9rem" }} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
}
