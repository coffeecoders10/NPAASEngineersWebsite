"use client";
import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{ position: "fixed", bottom: 30, right: 30, zIndex: 999 }}
        >
          <Fab
            color="secondary"
            size="medium"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{ color: "white" }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
