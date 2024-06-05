"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import HeaderBanner from "@/assets/images/bann4.jpg";

const AboutUsHeroSection = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: isMobileOrTablet ? "column" : "row",
        alignItems: "center",
        my: 5,
      }}
    >
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mb: isMobileOrTablet ? 3 : 0,
        }}
      >
        <Box sx={{ width: "100%", height: "auto" }}>
          <Image
            src={HeaderBanner}
            alt="banner"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 2,
          pl: isMobileOrTablet ? 0 : 5,
          textAlign: isMobileOrTablet ? "center" : "left",
        }}
      >
        <Typography
          variant={isMobileOrTablet ? "h5" : "h4"}
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          About Us
        </Typography>
        <Typography my={1} width={isMobileOrTablet ? "100%" : 530}>
          The largest animal adoption website in Ireland and Northern Ireland,
          Pet Adoption Website brings together dogs, cats, and other animals up
          for adoption from rescues all across the country. This eliminates the
          need for the public to visit each rescue separately in order to view
          and apply to available animals.
        </Typography>
      </Box>
    </Container>
  );
};
export default AboutUsHeroSection;
