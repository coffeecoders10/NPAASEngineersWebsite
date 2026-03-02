"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Team() {
  return (
    <Box
      id="team"
      sx={{ py: 5, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <SectionHeader subtitle="Our Team" title="" />
        <Typography
          variant="h6"
          color="text.primary"
          sx={{
            mb: 0,
            lineHeight: 1.2,
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 3
          }}
        >
          We have team of Protection & Application Engineers, Testing &
          Commissioning Engineers
        </Typography>

        {/* Card */}
        <Box
          sx={{
            position: "relative",
            maxWidth: 320,
            margin: "0 auto",
            borderRadius: 3,
            overflow: "hidden",
            height: 420,
            border: (theme) => `2px solid ${theme.palette.divider}`,
          }}
        >
          {/* Full-bg image */}
          <Image
            src="/img/default.jpg"
            alt="Pravin Talekar"
            fill
            style={{ objectFit: "cover" }}
          />

          {/* Overlay info card pinned to bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(6px)",
              borderTop: (theme) => `4px solid ${theme.palette.secondary.main}`,
              px: 3,
              py: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-saira), sans-serif",
                fontWeight: 700,
                color: "text.primary",
                mb: 0.25,
              }}
            >
              Pravin Talekar
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={1.5}>
              Director
            </Typography>

            <Box display="flex" justifyContent="center" gap={1}>
              {[
                {
                  href: "tel:919967580544",
                  icon: <PhoneIcon fontSize="small" />,
                },
                {
                  href: "mailto:pravintalekar@npaasengineers.com",
                  icon: <EmailIcon fontSize="small" />,
                },
                {
                  href: "https://www.linkedin.com/in/pravin-talekar-b2a1b724/",
                  icon: <LinkedInIcon fontSize="small" />,
                  external: true,
                },
              ].map(({ href, icon, external }, i) => (
                <Box
                  key={i}
                  component="a"
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    transition: "all 0.3s",
                    "&:hover": { bgcolor: "secondary.main" },
                  }}
                >
                  {icon}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
