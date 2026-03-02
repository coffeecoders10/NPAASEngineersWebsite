"use client";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingSpinner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "#F8F8F9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <CircularProgress size={56} sx={{ color: "#1842b6" }} />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
