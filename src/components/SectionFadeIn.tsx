// components/SectionFadeIn.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Box, { BoxProps } from "@mui/material/Box";

type Props = BoxProps & {
  children: React.ReactNode;
  delay?: number;
};

export default function SectionFadeIn({ children, delay = 0, ...rest }: Props) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </Box>
  );
}