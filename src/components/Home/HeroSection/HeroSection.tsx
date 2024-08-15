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

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ bgcolor: "background.paper", py: 8,  backgroundImage: `url(${Banner})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat", }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <Typography
                variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
                component="h3"
                fontWeight={500}
              >
                {isMobile ? "Adopt a Shelter" : "Adopt a shelter cat or dog"}
              </Typography>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="h2"
                fontWeight={600}
                color="primary.main"
              >
                Pet Adoption
              </Typography>
              {/* <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}> */}
              {isMobile ? (
                "There are likely hundreds of adoptable cats"
              ) : (
                <Typography variant="body1" my={4}>
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
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
              <Image src={HeaderBanner} alt="banner" layout="responsive" style={{ borderRadius: "5%" }}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
