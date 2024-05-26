import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import HeaderBanner from "@/assets/images/bann4.jpg";

const AboutUsHeroSection = () => {
  return (
    <Container maxWidth="md" sx={{ display: "flex", direction: "row", my: 5 }}>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          //   mt: 0,
          width: "100%",
        }}
      >
        <Box>
          <Image
            src={HeaderBanner}
            alt="banner"
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ flex: 2, pl: 5 }}>
        <Box
          sx={{
            width: "640px",
          }}
        ></Box>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          About Us
        </Typography>

        <Typography my={1} width={530}>
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
