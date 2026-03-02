"use client";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SectionHeader from "@/components/ui/SectionHeader";

const members = [
  { name: "John Doe", role: "CEO & Co-Founder", img: "/img/team-1.jpg" },
  { name: "Jane Smith", role: "Lead Developer", img: "/img/team-2.jpg" },
  { name: "Mike Johnson", role: "UI/UX Designer", img: "/img/team-3.jpg" },
  { name: "Sarah Williams", role: "Project Manager", img: "/img/team-4.jpg" },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
  tablet:  { breakpoint: { max: 992,  min: 640  }, items: 2 },
  mobile:  { breakpoint: { max: 640,  min: 0    }, items: 1 },
};

const TeamCard = styled(Box)(({ theme }) => ({
  borderTop: `4px solid ${theme.palette.secondary.main}`,
  background: "rgba(239, 239, 241, 0.8)",
  borderRadius: 10,
  overflow: "hidden",
  margin: "0 12px",
  textAlign: "center",

  "& .member-img": {
    width: 120,
    height: 120,
    borderRadius: "50%",
    border: `4px solid ${theme.palette.secondary.main}`,
    overflow: "hidden",
    position: "relative",
    margin: "0 auto",
    transition: "transform 0.5s",
  },

  "&:hover .member-img": {
    transform: "scale(1.05)",
  },

  "&:hover .member-name": {
    color: theme.palette.primary.main,
    transition: "color 0.5s",
  },
}));

function CustomPrev({ onClick }: { onClick?: () => void }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: -64,
        right: 56,
        bgcolor: "secondary.main",
        color: "white",
        width: 44,
        height: 44,
        "&:hover": { bgcolor: "primary.main" },
        transition: "all 0.3s",
        zIndex: 10,
      }}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
  );
}

function CustomNext({ onClick }: { onClick?: () => void }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: -64,
        right: 6,
        bgcolor: "secondary.main",
        color: "white",
        width: 44,
        height: 44,
        "&:hover": { bgcolor: "primary.main" },
        transition: "all 0.3s",
        zIndex: 10,
      }}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  );
}

export default function Team() {
  return (
    <Box id="team" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeader subtitle="Our Team" title="Meet Our Expert Team" />

        <Box sx={{ position: "relative" }}>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3500}
            arrows
            customLeftArrow={<CustomPrev />}
            customRightArrow={<CustomNext />}
            ssr
          >
            {members.map((member) => (
              <TeamCard key={member.name}>
                {/* Diamond/teal top shape */}
                <Box
                  sx={{
                    height: 80,
                    background: "secondary.main",
                    bgcolor: "secondary.main",
                    clipPath: "polygon(50% 100%, 100% 50%, 50% 0%, 0% 50%)",
                    mt: -4,
                    mb: -6,
                  }}
                />

                {/* Member image */}
                <Box py={3} px={2}>
                  <Box className="member-img" mb={2}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    className="member-name"
                    sx={{ fontFamily: "var(--font-saira), sans-serif", fontWeight: 600, mb: 0.5, color: "text.primary", transition: "color 0.5s" }}
                  >
                    {member.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {member.role}
                  </Typography>

                  {/* Social icons */}
                  <Box display="flex" justifyContent="center" gap={1}>
                    {[<FacebookIcon key="fb" fontSize="small" />, <TwitterIcon key="tw" fontSize="small" />, <LinkedInIcon key="li" fontSize="small" />].map((icon, i) => (
                      <Box
                        key={i}
                        component="a"
                        href="#"
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
              </TeamCard>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
