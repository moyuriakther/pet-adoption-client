"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import HeaderBanner from "@/assets/images/banner.png";
import Banner from "@/assets/images/banner2.jpg"
import { keyframes } from "@mui/system";

// Keyframe animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ bgcolor: "background.paper", py: 8,  backgroundImage: `url(${Banner})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat", }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}  sx={{
              animation: `${fadeInUp} 1s ease-out`, // Adding animation to the text container
              animationFillMode: "backwards",
            }}>
            <Stack direction="column" spacing={2}>
              <Typography
                variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
                component="h3"
                fontWeight={500}
                sx={{ animation: `${fadeInUp} 1s ease-out`, animationDelay: "0.5s", animationFillMode: "backwards" }}
              >
                {isMobile ? "Adopt a Shelter" : "Adopt a shelter cat or dog"}
              </Typography>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="h2"
                fontWeight={600}
                color="primary.main"
                sx={{ animation: `${fadeInUp} 1s ease-out`, animationDelay: "0.7s", animationFillMode: "backwards" }}
              >
                Pet Adoption
              </Typography>
              {/* <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}> */}
              {isMobile ? (
               <Typography
               variant="body2"
               sx={{ animation: `${fadeInUp} 1s ease-out`, animationDelay: "0.9s", animationFillMode: "backwards" }}
             >
               There are likely hundreds of adoptable cats
             </Typography>
              ) : (
                <Typography variant="body1" my={4}
                sx={{ animation: `${fadeInUp} 1s ease-out`, animationDelay: "1.1s", animationFillMode: "backwards" }}
                >
                  There are likely hundreds of adoptable cats and dogs in your
                  local animal shelters or rescues right now who would love to
                  join your family.
                </Typography>
              )}
              {/* </Box> */}
              <Typography
                variant={isMobile ? "body2" : isTablet ? "body1" : "h6"}
                my={4}
              ></Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: isMobile ? "column" : "row",
                  animation: `${fadeInUp} 1s ease-out`,
                  animationDelay: "1.3s",
                  animationFillMode: "backwards",
                }}
              >
                <Button variant="contained" fullWidth={isMobile}>
                  Adopt Now
                </Button>
                <Button variant="outlined" fullWidth={isMobile}>
                  Contact Us
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid  item
            xs={12}
            md={6}
            sx={{
              width: "100%",
              height: "auto",
              position: "relative",
              animation: `${fadeInUp} 1s ease-out`, // Adding animation to the image container
              animationDelay: "1.5s",
              animationFillMode: "backwards",
            }}>
            {/* <Box sx={{ width: "100%", height: "auto", position: "relative" }}> */}
              <Image src={HeaderBanner} alt="banner" layout="responsive" style={{ borderRadius: "5%", animation: `${fadeInUp} 1s ease-out`, animationDelay: "1.7s", animationFillMode: "backwards" }}/>
            {/* </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
